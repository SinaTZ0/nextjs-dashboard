"use client";
interface propsI {
  dataa: any;
}

function ConsoleLog(props: propsI) {
  console.log(props.dataa);
  return <div>ConsoleLog</div>;
}

export default ConsoleLog;
