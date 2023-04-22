import {render, Screen } from "@testing-library/react";
import MainPage from "./Layout/MainPage";
import userEvent from "@testing-library/user-event";
describe('mainpage component',()=>{
//arrange
test('renders welcome to expense tracker as text',()=>{
    render(<MainPage/>)
const pageNameElement=screen.getByText('Welcome to Expense Tracker',{exact:false})
expect(pageNameElement).toBeInTheDocument();


});
test('renders signup when login is false',()=>{
    render(<MainPage/>);
    const pageNameElement=screen.getByText('Welcome to Expense Tracker',{exact:false})
expect(pageNameElement).toBeInTheDocument();

})
test('renders login when login is true',()=>{
    render(<MainPage/>);
  userEvent.click(onclickHandler)

})


})