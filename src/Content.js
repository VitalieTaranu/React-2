const Content = (props) => {
    console.log(props)
    return (
        <div>
         <p>Part 1 has the name: {props.part1} and has {props.exercises1} exercises</p>
         <p>Part 2 has the name: {props.part2} and has {props.exercises2} exercises</p>
         <p>Part 3 has the name: {props.part3} and has {props.exercises3} exercises</p>
        </div>
    )
}

export default Content;