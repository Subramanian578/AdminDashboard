import React from 'react'
import './App.css'
import dash2 from './images/dashboard (2).png';
import book from './images/readingbook.png';
import tea from './images/teacher2.png';
import school from './images/school.png';
import payment from './images/payment.png';
import help from './images/help-web-button.png';
import set from './images/settings.png';
import search from './images/search.png';
import notification from './images/notifications.png';
import user from './images/user.png';
import tudents from './images/students.png';
import teachers from './images/teachers.png';
import schools from './images/schools.png';
import income from './images/income.png';
import info from './images/info.png';


function App() {
  return (
    <div>
      <body>
    <div class="side-menu">
        <div class="brand-name">
            <h1>Dashboard</h1>
        </div>
        <ul>
            <li><img src={dash2} alt="Logo" />&nbsp;<span>Dashboard</span> </li>
            <li><img src={book} alt="Logo" />&nbsp;<span>Students</span> </li>
            <li><img src={tea} alt="Logo" />&nbsp;<span>Teachers</span> </li>
            <li><img src={school} alt="Logo" />&nbsp;<span>Schools</span> </li>
            <li><img src={payment} alt="Logo" />&nbsp;<span>Income</span> </li>
            <li><img src={help} alt="Logo" />&nbsp; <span>Help</span></li>
            <li><img src={set} alt="Logo" />&nbsp;<span>Settings</span> </li>
        </ul>
    </div>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="search">
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={search} alt="Logo" /></button>
                </div>
                <div class="user">
                    <a href="#" class="btn">Add New</a>
                    <img src={notification} alt="Logo" />
                    <div class="img-case">
                    <img src={user} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="cards">
                <div class="card">
                    <div class="box">
                        <h1>2235</h1>
                        <h3>Students</h3>
                    </div>
                    <div class="icon-case">
                    <img src={tudents} alt="Logo" />
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>100</h1>
                        <h3>Teachers</h3>
                    </div>
                    <div class="icon-case">
                    <img src={teachers} alt="Logo" />
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>6</h1>
                        <h3>Colleges</h3>
                    </div>
                    <div class="icon-case">
                    <img src={schools} alt="Logo" />
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>350000</h1>
                        <h3>Income</h3>
                    </div>
                    <div class="icon-case">
                    <img src={income} alt="Logo" />
                    </div>
                </div>
            </div>
            <div class="content-2">
                <div class="recent-payments">
                    <div class="title">
                        <h2>Recent Payments</h2>
                        <a href="#" class="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>College</th>
                            <th>Amount</th>
                            <th>Option</th>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="#" class="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>Robin Steve</td>
                            <td>St. Joseph's College</td>
                            <td>$150</td>
                            <td><a href="#" class="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Durairaj</td>
                            <td>American College</td>
                            <td>$100</td>
                            <td><a href="#" class="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>Randy Ortan</td>
                            <td>St. Paul's College</td>
                            <td>$200</td>
                            <td><a href="#" class="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>Mitchell Marsh</td>
                            <td>Mount Royal University</td>
                            <td>$500</td>
                            <td><a href="#" class="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>Anrtonio</td>
                            <td>Massey University</td>
                            <td>$900</td>
                            <td><a href="#" class="btn">View</a></td>
                        </tr>
                    </table>
                </div>
                <div class="new-students">
                    <div class="title">
                        <h2>New Students</h2>
                        <a href="#" class="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td><img src={user} alt="Logo" /></td>
                            <td>John Steve Doe</td>
                            <td><img src={info} alt="Logo" /></td>
                        </tr>
                        <tr>
                            <td><img src={user} alt="Logo" /></td>
                            <td>Robin Steve</td>
                            <td><img src={info} alt="Logo" /></td>
                        </tr>
                        <tr>
                            <td><img src={user} alt="Logo" /></td>
                            <td>Nairobi</td>
                            <td><img src={info} alt="Logo" /></td>
                        </tr>
                        <tr>
                            <td><img src={user} alt="Logo" /></td>
                            <td>John Durairaj</td>
                            <td><img src={info} alt="Logo" /></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
    </div>
  )
}

export default App