// // Self-closing tags are used when we don’t want to pass any content (children) inside the component.
// <ProfileCard />  // Just renders the component with no inner content.

// // Container tags are used when we want to include content inside the component.
// // This content is passed as 'children' to the component.
// <Modal>
//   <p>This is the content inside the modal</p>
// </Modal>  // 'Modal' will receive the inner content as 'props.children'


// // A component that receives and displays its children
// function MyWrapper(props) {
//   return (
//     <div className="wrapper">
//       {/* This will render whatever content was placed inside <MyWrapper> */}
//       {props.children}
//     </div>
//   );
// }

// // Usage of that component
// <MyWrapper>
//   <h1>Hello!</h1>
//   <p>This paragraph is inside the wrapper.</p>
// </MyWrapper>
// Key points:
// children is a special prop in React that includes everything between the opening and closing tags of a component.

// It allows for more flexible and reusable components.

// children is part of the props object: you access it with props.children.

// Use it when you want to make a wrapper or layout component that displays whatever is passed inside it.