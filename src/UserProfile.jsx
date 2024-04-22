// App.js
import './styles.css';
import profile from './icons/profile.png';
function UserProfile() {
  return (
    <div className="container">
      <div className="view-account">
        <section className="module">
          <div className="module-inner">
            <div className="side-bar">
              <div className="user-info">
                <img className="img-profile img-circle img-responsive center-block" src={profile} alt="" />
                <div className="meta">
                  <ul className="list list-unstyled">
                    <li className="name">Rebecca Sanders
                      <label className="label label-info">Faculty</label>
                    </li>
                  </ul>
                  <div className="email"><a href="#">Rebecca.S@website.com</a></div>
                  <div className="activity">Last Updated: 22/03/2024 at 18.06</div>
                </div>
              </div>
              <nav className="side-menu">
                <ul className="nav">
                  <li className="active"><a href="#"><span className="fa fa-user"></span> Profile</a></li>
                  <li><a href="#"><span className="fa fa-cog"></span> Settings</a></li>
                  <li><a href="#"><span className="fa fa-envelope"></span> Messages</a></li>
                  <li><a href="user-drive.html"><span className="fa fa-th"></span> Drive</a></li>
                  <li><a href="#"><span className="fa fa-clock-o"></span> Reminders</a></li>
                </ul>
              </nav>
            </div>
            <div className="content-panel">
              <h2 className="title">Profile</h2>
              <form className="form-horizontal">
                <fieldset className="fieldset">
                  <h3 className="fieldset-title">Personal Info</h3>
                  <div className="form-group avatar">
                    <figure className="figure col-md-2 col-sm-3 col-xs-12">
                      <img className="img-rounded img-responsive" src="utils/user.png" alt="" />
                    </figure>
                    <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                      <input type="file" className="file-uploader pull-left" />
                      <button type="submit" className="btn btn-sm btn-default-alt pull-left">Update Image</button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">User Name</label>
                    <div className="col-md-10 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeHolder="Rebecca" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
                    <div className="col-md-10 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeHolder="Rebecca" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                    <div className="col-md-10 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeHolder="Sanders" />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="fieldset">
                  <h3 className="fieldset-title">Contact Info</h3>
                  <div className="form-group">
                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">Email</label>
                    <div className="col-md-10 col-sm-9 col-xs-12">
                      <input type="email" className="form-control" placeHolder="Rebecca@website.com" />
                    </div>
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">Address</label>
                    <div className="col-md-10 col-sm-9 col-xs-12">
                      <input type="text" className="form-control" placeHolder="Your Current Address" />
                    </div>
                    <br />
                  </div>
                  <div className="form-group">
                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">Contact Number</label>
                    <div className="col-md-10 col-sm-9 col-xs-12">
                      <input type="url" className="form-control" placeHolder="Current Contact Number" />
                    </div>
                  </div>
                  <br />
                </fieldset>
                <hr />
                <div className="form-group">
                  <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                    <input className="btn btn-primary" type="submit" placeHolder="Update Profile" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
