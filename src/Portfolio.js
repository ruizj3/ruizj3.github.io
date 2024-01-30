import React from 'react';


function Portfolio() {
  return (
<section id="portfolio" class="portfolio">
        <div class="project">
            <img src="/NodeGraph.png" alt="Node Graph of Customers to Stores connections."/>
            <h3>Equal Item Substitution Recovery</h3>
            <p>Final project for master's degree.</p>
            <a href="https://docs.google.com/document/d/1tywfdtC6FkuHbwu3HbgzFoZcHxyszrIN/edit?usp=sharing&ouid=116644839752037295789&rtpof=true&sd=true"
                class="my-link">View Report</a>
            <a href="https://github.com/ruizj3/ruizj3.github.io/blob/main/Equal%20Item%20Substitution%20Recovery/1.)%20Parent%20Company%20Transportation%20Problem%20Submitted.ipynb"
                class="my-link">View Raw Network Optimization Code</a>
            <a href="https://github.com/ruizj3/ruizj3.github.io/blob/main/Equal%20Item%20Substitution%20Recovery/2.)%20Transportation%20Neural%20Net%20Sales%20Projection%20Submitted.ipynb"
                class="my-link">View Raw Neural Network Code</a>
            <a href="https://github.com/ruizj3/ruizj3.github.io/blob/main/Equal%20Item%20Substitution%20Recovery/3.)%20Transportation%20ARIMA%20Submitted.ipynb"
                class="my-link">View Raw ARIMA Code</a>
            <p>You may spin up runnable code by clicking the link below. This may take 15 minutes or more to spin up the image 
                and space to interact.
            </p>
            <a href="https://mybinder.org/v2/gh/ruizj3/ruizj3.github.io/main?labpath=Equal+Item+Substitution+Recovery" class="my-link">Run Code in Virtual Environment</a>
        </div>
        <div class="project">
            <img src="NodeGraph.png" alt="Node Graph of Customers to Stores connections."></img>
            <h3>Pill and Bill</h3>
            <p>A small app made during the Flatiron bootcamp.</p>
            <a href="https://ruizj3.github.io/pill_and_bill/" class="my-link">View React App</a>
        </div>
        <div class="project">
            <img src="NodeGraph.png" alt="Node Graph of Customers to Stores connections."></img>
            <h3>Project Title 3</h3>
            <p>Description of Project 3.</p>
            <a href="link-to-project-2" class="my-link">View Project</a>
        </div>
</section>
    );
}

export default Portfolio;