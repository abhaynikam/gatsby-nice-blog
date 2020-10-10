---
title: Testing Rails generators with ease.
date: "2020-10-30"
template: "post"
---

Rails generator is a tool provided by the Rails
framework to reduce the human effort of doing
redundant manual things by automating the workflow.

We use Rails generator all the time. Like, when you
run `rails new <project_name>` it behind the scenes
use Rails generator. Similarly, when you install a
new gem, some of the gems provide the generator to
make installation and configuring the gem easier.

Refer: [Creating and Customizing Rails Generators & Templates](https://guides.rubyonrails.org/generators.html)
guide to create generators.

#### Problem statement & motivation
To install Action Text into the application,
you run `rails action_text:install`. The installer
was recently moved from Rails template to a generator.
After moving to the generator we encountered some
issues in the generator like:
[#39128](https://github.com/rails/rails/issues/39128),
[#37823](https://github.com/rails/rails/pull/37823),
[#40184](https://github.com/rails/rails/issues/40184)
which weren't caught in the early stage of development.

This was my motivation for looking into writing test cases
for Rails generator. PR: [#39317](https://github.com/rails/rails/pull/39317)

Adding test cases for generators which normally
only creates a new file in the system are very easy.
For example, the migration generator.
Migration generator adds a file called `db/<timestamp>_name.rb`
and test cases would assert the generation of the file.
Writing test cases for generators which configures
files into a Rails application was a bit of challenge
until we explore that area.

Let learn it with an example here. Let assume we are writing
a test case for a generator that adds Bootstrap in the application.
The generator would look something like:

```ruby
module Bootstrap
  module Install
    class InstallGenerator < Rails::Generators::Base
      desc "Adds Bootstrap to the application"
      source_root File.expand_path("templates", __dir__)

      def add_bootstrap_package
        say "Adding bootstrap packages", :green
        run "yarn add bootstrap jquery popper.js"
      end

      def import_bootstrap_stylesheet_in_application_scss
        ...
      end

      def import_bootstrap_javascript_in_application_js
        ...
      end

      ...
    end
  end
end
```

To add Bootstrap in the application you require
following files and these needs to be present when
Bootstrap generator runs in the test cases.

- `package.json` to install NPM package.
- Webpacker configured.
- `application.js` bundled via webpack.
- `application.scss` bundled via webpack.


```ruby
require "test_helper"

class BootstrapInstallGeneratorTest < Rails::Generators::TestCase
  destination File.expand_path("../tmp", __dir__)
  setup :prepare_destination
  tests Bootstrap::Install::InstallGenerator

  def test_should_add_bootstrap_npm_package
    run_generator

    assert_file "package.json" do |content|
      assert_match(/popper/, content)
      assert_match(/bootstrap/, content)
      assert_match(/jquery/, content)
    end
  end
end
```

Running the above test cases will fail with
following error:
```ruby
Expected file "package.json" to exist, but does not
```

To tackle this problem we will create a
simple Rails application on setup and run
the generator within the dummy application.

- Add a simple Rails application in the template:
`tmp/templates/app_template`.

- Add a generator helper that would build the application
on setup. The helper has `build_app` helper method
which copies the Rails template app in the temp directory.
The generator also defines some path helper methods to
easily find the application, app_template.

```ruby
ROOT_PATH = File.expand_path("../", __dir__)

module GeneratorHelper
  def app_template_path
    File.join ROOT_PATH, "tmp/templates/app_template"
  end

  def tmp_path(*args)
    @tmp_path ||= File.realpath(Dir.mktmpdir(nil, File.join(ROOT_PATH, "tmp")))
    File.join(@tmp_path, *args)
  end

  def app_path(*args)
    path = tmp_path(*%w[app] + args)
    if block_given?
      yield path
    else
      path
    end
  end

  def build_app
    FileUtils.rm_rf(app_path)
    FileUtils.cp_r(app_template_path, app_path)
  end

  def teardown_app
    FileUtils.rm_rf(tmp_path)
  end
end
```

- Now the last thing to do is update the test cases
to setup the application and run generator within the
application namespace.

```ruby
require "test_helper"

class BootstrapInstallGeneratorTest < Rails::Generators::TestCase
  include GeneratorHelper

  tests Bootstrap::Install::InstallGenerator
  setup :build_app
  teardown :teardown_app

  def test_should_add_bootstrap_npm_package
    Dir.chdir(app_path) do
      run_generator

      assert_file "package.json" do |content|
        assert_match(/popper/, content)
        assert_match(/bootstrap/, content)
        assert_match(/jquery/, content)
      end
    end
  end
end
```

Voila. The test cases for Bootstrap generator should be passing now.

**Happy Coding!!**
