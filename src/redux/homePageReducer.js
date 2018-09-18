export default function HomePageReducer(state={},action)
{
  switch (action.type) {
    case "TABS_ACTION":
      return action.payload;
    default:
      return state;
  }
}
