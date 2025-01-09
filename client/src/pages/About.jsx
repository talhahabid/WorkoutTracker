// ALL GOOD DONT TOUCH PLS
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Say Goodbye to Paper Workout Logs!
      </h1>
      <p className="text-lg mb-6">
        Keeping track of your workouts in a notebook can be time-consuming and
        disorganized. That's why we've created a platform to help you log,
        organize, and track your fitness journey all in one place. No more lost
        pages or forgetting your progress!
      </p>
      <p className="text-lg mb-6">
        Whether you're new to fitness or a seasoned athlete, our platform helps
        you easily plan your workouts, monitor your progress, and stay motivated
        on your journey to achieving your goals.
      </p>
      <p className="text-lg mb-8">
        Ditch the pen and paper. Our website allows you to digitally manage your
        workouts and access them anytime, anywhere—making your fitness journey
        simpler and more efficient!
      </p>

      <h2 className="text-2xl font-semibold mb-6">Get Started Today!</h2>
      <p className="text-lg mb-6">
        Ready to make your fitness routine more organized and effective? Sign up
        today and take the first step toward a more streamlined workout
        experience!
      </p>

      <Link to="/signup">
        <button className="bg-blue-400 text-white font-semibold py-3 px-6 rounded-md text-xl hover:bg-blue-700 transition duration-300">
          Sign Up Now
        </button>
      </Link>

      <p className="mt-6 text-lg">
        Already a member?{" "}
        <Link to="/signin" className="font-semibold text-blue-600">
          Log in here
        </Link>
        .
      </p>

      <footer className="mt-12  text-center">
        <p className="text-lg mb-2">
          Have any questions or feedback? Reach out:
        </p>
        <p className="text-lg">
          Email:{" "}
          <a href="mailto:talhahabid@gmail.com" className="text-blue-500">
            talhahabid@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default About;
