"use client"
import "./globals.css";

export default function Home() {
    const onFormSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        console.log(formData.get('fullName'))
    }
  return (
      <>
          <form autoComplete="off" onSubmit={onFormSubmit}>
              <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" name="fullName" id="fullName"/>
              </div>
              <div>
                  <label htmlFor="empCode">Description</label>
                  <input type="text" name="empCode" id="empCode"/>
              </div>
              <div>
                  <label htmlFor="salary">Salary</label>
                  <input type="text" name="salary" id="salary"/>
              </div>
              <div>
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" id="city"/>
              </div>
              <div className="form_action--button">
                  <input type="submit" value="Submit"/>
                  <input type="reset" value="Reset"/>
              </div>
          </form>
          <table className="list" id="employeeList">
              <thead>
              <tr>
                  <th>Full Name</th>
                  <th>EMP Code</th>
                  <th>Salary</th>
                  <th>City</th>
                  <th></th>
              </tr>
              </thead>
              <tbody>

              </tbody>
          </table>
      </>
  );
}
