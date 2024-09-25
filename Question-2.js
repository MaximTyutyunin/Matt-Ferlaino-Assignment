/**Biggest obstacle:  had to learn about unit tests , then how to install , use, Jest **/

/**
 * Given a state, and a action, this function will apply the given action to
 * the state.
 *
 * Note: the state is immutable
 *
 * Default state:
 * {
 * messageList: []
 * }
 *
 * each item in the "messageList" should have the format:
 *
 * {
 * id: "some id",
 * message: "some message"
 * }
 *
 * Valid actions:
 *
 * {
 * type: "add-message",
 * message: "<some message>"
 * }
 *
 * {
 * type: "remove-message",
 * id: "<message id>"
 * }
 **/

function reducer(state, action) {
  switch (action.type) {
    case "add-message":
      return {
        messageList: state.messageList.concat([action.message]),
      };
    case "remove-message":
      return {
        messageList: state.messageList.filter(({ id }) => id !== action.id),
      };
    default:
      throw Error("error");
  }
}
module.exports = reducer;
