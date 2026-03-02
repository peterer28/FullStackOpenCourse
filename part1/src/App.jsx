const Header = (props) =>{
  console.log(props)
  return(
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) =>{
  console.log(props)
  return(
    <p>{props.content.name} {props.content.excercise}</p>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <div>
      <Part content = {props.content.parts[0]}/>
      <Part content = {props.content.parts[1]}/>
      <Part content = {props.content.parts[2]}/>
    </div>
  )
}

const Total = (props) =>{
  console.log(props)
  let total = 0
  props.excercises.parts.forEach( part=> {
    total +=part.excercise    
  });
  console.log(total)
  return(
    <p>Number of exercices {total}</p>
  )
}

const App = () =>{
  const course = {
    name: 'Half Stack Application Development',

    parts : [
    {name: 'Fundamentals of react', excercise: 10},
    {name: 'Using Props to Pass Data', excercise: 7},
    {name: 'State of a Component', excercise: 14}
  ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content content = {course}/>
      <Total excercises={course}/>
    </div>
  )
}

export default App