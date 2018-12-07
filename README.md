# Aglo test using React

Sorrying for not using the files you provided for me.Instead of using Angular to add the function, I used React.js, which I am more familiar to, to code it. 

I will illustrate how I address this issue.

Firstly, I stated showImg equals to false to control the state of the images. And when onClick event triggered ,it would change the state of the showImg.

The core part of codes are follewed:

handleClick(){
    this.setState(prevState => ({
      showImg: !prevState.showImg
    }));
  }

  <AddImage showImages={this.state.showImg}/>
      <div className="show-help">
      <button onClick={this.handleClick}>
      {this.state.showImg ? 'Hide' : 'Show Help'}
      </button>

I am so sorry that I am not using the origin file, because I think it will take me longer time to focus on learning Angular first. Here I am using React to show my logic to address the issue. And then I will fix it with Angular. 



### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/tianyanggao/Aglo-test
> cd Aglo-test
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
