const reducerTest = require("./Question-2");
/*Default state: messageList: []. The state is immutable, meaning --> can't modify it directly; always return a new object.*/
test("is initial state = messageList", () => {
  //reducer(state, action) {
  const initialState = reducerTest(undefined, { type: "init" });

  expect(initialState).toEqual({
    messageList: [],
  });
});
