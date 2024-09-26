/**
test for add, delete, unchanged initial object, propper error throw
**/

let reducerTest = require("./Question-2");

/*if action is unknown --> return error.*/
test("is error thrown when action is unknown?", () => {
  //i thought at the beginning that the function should check
  // if when the action is unknown the initial list will return it self but then
  // after checking the requirements decided to check for the propper throw of the error
  expect(() => {
    reducerTest(undefined, { type: "unknown-action" });
  }).toThrow("error");
});

/*this function should be checking if addition works propperly*/
test("does added message match {id: '1', message: 'Hello World'}?", () => {
  let initialState = { messageList: [] }; //since we start with empty list, initialState should be empty
  let action = {
    type: "add-message",
    message: { id: "1", message: "Hello World" },
  };

  let newState = reducerTest(initialState, action); // call for addition

  expect(newState).toEqual({
    // new object should be of the following appearance
    messageList: [{ id: "1", message: "Hello World" }],
  });

  // Check for the original state to not to be mutated (immutability check)
  //this is the one i almost forgot about and spend alot of time on since for some reason it was confusing to me
  //i wanted to create a separate function for it which now seems absurd
  expect(initialState).toEqual({ messageList: [] });
});

test("does the function remove entries by id's correctly", () => {
  // init Initial state with 2 messages
  let initialState = {
    messageList: [
      { id: "1", message: "Hello" },
      { id: "2", message: "World" },
    ],
  };

  let action = {
    type: "remove-message",
    id: "1", // ill remove id 1
  };

  let newState = reducerTest(initialState,action);

  //now the new copy of messageList should have only id 2
  expect(newState).toEqual({
    messageList: [{ id: '2', message: 'World' }],
  });


  //same logic as before in this case, checking if the initial object was affected
  expect(initialState).toEqual({
    messageList: [
      { id: '1', message: 'Hello' },
      { id: '2', message: 'World' },
    ],
  });
});
