# Introduction to Rails

You'll use Rails to build a clone of a popular social media website. We'll call it Acebook.

## Convention over configuration

Last week, you did tons of low-level stuff.  You had to do lots of work that would have been much quicker and easier with libraries.

For this project, you'll use Rails. Rails is a web application framework that prioritises convention over configuration. This means two things:

1. You don't tell Rails how your code is structured. You structure your code in the way Rails thinks is best.
2. The API tries to be very consistent. You can often guess how a Rails API will work, based on the way other Rails APIs work.

### Advantages and disadvantages

#### Advantages

* You have to write less code, because you don't need to tell Rails the things it has already assumed.
* Your code is automatically structured is a half-decent way.
* You can learn the Rails API quite quickly by following its patterns.

#### Disadvantages

* It's easy to do things the way Rails wants you to.  It can be quite hard when you need to leave the Rails.
* Rails has a lot of magic in the way it does things because of the higher level abstractions it gives you.  It can be hard to understand what's going on under the covers.

### Example 1

When you write tests with rspec,  you run `rspec`, it will run all the files whose names match the pattern `*_spec.rb`.  This convention means:

* You have to write less code because you don't need to bother telling rspec where your tests are.
* Your test files are structured more sensibly because their names clearly name them as "specs".

### Example 2

In rspec, the `.to be()` matcher has the same syntax as `.to eq()`.  This convention means that:

* If you learn `.to be()` first and then you hear about `eq`, you can make a guess about how you use it and you're more likely to be right.

## Related Pills

* :pill: [MVC](../../pills/mvc.md)
* :pill: [Rails console](../../pills/rails_console.md)
* :pill: [Active Record](../../pills/activerecord.md)

## Resources

* [Structure of Rails apps (diagram)](http://images.thoughtbot.com/ember-rails-terminology-differences/rails.png)
* [Active Record basics](http://guides.rubyonrails.org/active_record_basics.html)
* [Associations](http://guides.rubyonrails.org/association_basics.html)
* [Validations](http://guides.rubyonrails.org/active_record_validations.html)
* [Layouts and Rendering](http://guides.rubyonrails.org/layouts_and_rendering.html)
* [Active Record Migrations](http://guides.rubyonrails.org/migrations.html)


![Tracking pixel](https://githubanalytics.herokuapp.com/course/engineering_projects/rails/intro_to_rails.md)
