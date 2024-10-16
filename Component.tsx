import { Suspense, Component } from "react";

// CLASS-BASED

export default class Comp extends Component {
  render() {
    return (
      <>
        <h1>Class</h1>
      </>
    )
  }
}

// FUNCTION BASED

export default function myApp() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <h1>Fuction</h1>
    </Suspense>
  )
}
