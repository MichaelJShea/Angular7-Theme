import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import * as Icons from "react-feather";
import MenuHelper from "./sideMenuHelp";
import { Badge } from "./sideMenuHelp";

class Menus extends Component {
  render() {
    return (
      <MenuHelper>
        <MenuHelper.Label labelText="Navigation" />
        <MenuHelper.MultiMenu
          name="Dashbord"
          Icon={<Icons.Home size={14} />}
          defaultSelect
        >
          <NavLink exact to="/" activeClassName="active">
            Analytics
          </NavLink>
          <NavLink exact to="/sales" activeClassName="active">
            Sales
          </NavLink>
          <NavLink exact to="/crypto" activeClassName="active">
            Crypto
          </NavLink>
          <NavLink exact to="/project" activeClassName="active">
            Project
          </NavLink>
          <NavLink exact to="/helpdesk" activeClassName="active">
            Helpdesk
            <Badge text="NEW" color="danger" />
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.MultiMenu badgeText="100+" badgeColor="success" name="Widget " Icon={<Icons.Layers size={14} />}>
          <NavLink exact to="/widget/statistic" activeClassName="active">
            Statistic
          </NavLink>
          <NavLink exact to="/widget/data" activeClassName="active">
            Data
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.Label labelText="UI Element" />
        <MenuHelper.MultiMenu name="Basic" Icon={<Icons.Box size={14} />}>
          <NavLink exact to="/alert" activeClassName="active">
            Alert
          </NavLink>
          <NavLink exact to="/button" activeClassName="active">
            Button
          </NavLink>
          <NavLink exact to="/badges" activeClassName="active">
            Badges
          </NavLink>
          <NavLink exact to="/breadcrumbpagination" activeClassName="active">
            Breadcrumbs & Pagination
          </NavLink>
          <NavLink exact to="/card" activeClassName="active">
            Cards
          </NavLink>
          <NavLink exact to="/collapse" activeClassName="active">
            Collapse
          </NavLink>
          <NavLink exact to="/carousel" activeClassName="active">
            Carousel
          </NavLink>
          <NavLink exact to="/progress" activeClassName="active">
            Progress
          </NavLink>
          <NavLink exact to="/modals" activeClassName="active">
            Modal
          </NavLink>
          <NavLink exact to="/spinners" activeClassName="active">
            Spinner
            <Badge text="NEW" color="danger" />
          </NavLink>
          <NavLink exact to="/navstabs" activeClassName="active">
            Tabs & pills
          </NavLink>
          <NavLink exact to="/typography" activeClassName="active">
            Typography
          </NavLink>
          <NavLink exact to="/tooltippopover" activeClassName="active">
            Tooltip & popovers
          </NavLink>
          <NavLink exact to="/toasts" activeClassName="active">
            Toasts
            <Badge text="NEW" color="danger" />
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.MultiMenu name="Advance" Icon={<Icons.Gitlab size={14} />}>
          <NavLink exact to="/sweetalert" activeClassName="active">
            Sweet alert
          </NavLink>
          <NavLink exact to="/datepicker" activeClassName="active">
            Datepicker
          </NavLink>
          <NavLink exact to="/lightbox" activeClassName="active">
            Lightbox
          </NavLink>
          <NavLink exact to="/modaladbance" activeClassName="active">
            Modal
          </NavLink>
          <NavLink exact to="/notification" activeClassName="active">
            Notification
          </NavLink>
          <NavLink exact to="/nestable" activeClassName="active">
            Nestable
          </NavLink>
          <NavLink exact to="/pnotify" activeClassName="active">
            Pnotify
          </NavLink>
          <NavLink exact to="/rating" activeClassName="active">
            Rating
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.MultiMenu name="Icons" Icon={<Icons.Gitlab size={14} />}>
          <NavLink exact to="/icon/feather" activeClassName="active">
            Feather
            <Badge text="NEW" color="danger" />
          </NavLink>
          <NavLink exact to="/icon/flag" activeClassName="active">
            Flag
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.Label labelText="Forms" />
        <MenuHelper.MultiMenu name="Forms" Icon={<Icons.FileText size={14} />}>
          <NavLink exact to="/formelements" activeClassName="active">
            Form Elements
          </NavLink>
          <NavLink exact to="/formelementsadvance" activeClassName="active">
            Form advance
          </NavLink>
          <NavLink exact to="/formvalidation" activeClassName="active">
            Form validation
          </NavLink>
          <NavLink exact to="/formmasking" activeClassName="active">
            Form masking
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.Label labelText="Table" />
        <MenuHelper.MultiMenu
          name="Bootstrap Table"
          Icon={<Icons.AlignJustify size={14} />}
        >
          <NavLink exact to="/bt/basictable" activeClassName="active">
            Basic table
          </NavLink>
          <NavLink exact to="/bt/sizingtable" activeClassName="active">
            Sizing table
          </NavLink>
          <NavLink exact to="/bt/bordertable" activeClassName="active">
            Border table
          </NavLink>
          <NavLink exact to="/bt/stylingtable" activeClassName="active">
            Styling table
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.Label labelText="Chart & Maps" />
        <MenuHelper.MultiMenu name="Chart" Icon={<Icons.PieChart size={14} />}>
          <NavLink exact to="/chart/amchart" activeClassName="active">
            amChart 4
          </NavLink>
          <NavLink exact to="/chart/chartjs" activeClassName="active">
            Chart js
          </NavLink>
          <NavLink exact to="/chart/echart" activeClassName="active">
            Echart
          </NavLink>
          <NavLink exact to="/chart/googlechart" activeClassName="active">
            Google
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.MultiMenu name="Maps" Icon={<Icons.Map size={14} />}>
          <NavLink exact to="/map/googlemap" activeClassName="active">
            Google
          </NavLink>
          <NavLink exact to="/map/vectormap" activeClassName="active">
            Vector
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.Label labelText="Pages" />
        <MenuHelper.MultiMenu
          name="Authentication"
          Icon={<Icons.Lock size={14} />}
        >
          <Link to="/authsingup" target="_blank">
            Sing up
          </Link>
          <Link to="/authsingup1" target="_blank">
            Sing up v2
            <Badge text="NEW" color="primary" />
          </Link>
          <Link to="/authsingin" target="_blank">
            Sing in
          </Link>
          <Link to="/authsingin1" target="_blank">
            Sing in v2
            <Badge text="NEW" color="primary" />
          </Link>
          <Link to="/authsingin2" target="_blank">
            Sing in v3
            <Badge text="NEW" color="primary" />
          </Link>
          <Link to="/reset-password" target="_blank">
            Reset password
          </Link>
          <Link to="/change-password" target="_blank">
            Change password
          </Link>
          <Link to="/profile-setting" target="_blank">
            Profile settings
          </Link>
        </MenuHelper.MultiMenu>
        <MenuHelper.MultiMenu
          name="Maintenance"
          Icon={<Icons.Sliders size={14} />}
        >
          <Link to="/error" target="_blank">
            Error
          </Link>
          <Link to="/offline" target="_blank">
            Offline UI
          </Link>
          <Link to="/comming" target="_blank">
            Comming soon
          </Link>
        </MenuHelper.MultiMenu>
        <MenuHelper.Label labelText="App" />
        <MenuHelper.MenuSingle path="/app/message" icon={<Icons.MessageCircle size={14} />} text="Message" />
        <MenuHelper.MenuSingle path="/app/email" icon={<Icons.Mail size={14} />} text="Email" />

        <MenuHelper.MultiMenu
          name="To-Do"
          Icon={<Icons.CheckSquare size={14} />}
        >
          <NavLink exact to="/todo" activeClassName="active">
            To-Do
          </NavLink>
          <NavLink exact to="/note" activeClassName="active">
            Notes
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.MultiMenu name="Gallery" Icon={<Icons.Image size={14} />}>
          <NavLink exact to="/gallery/grid" activeClassName="active">
            Grid
          </NavLink>
          <NavLink exact to="/gallery/masonry" activeClassName="active">
            Masonry
          </NavLink>
          <NavLink exact to="/gallery/advance" activeClassName="active">
            Advance
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.Label labelText="Extension" />
        <MenuHelper.MultiMenu name="Editor" Icon={<Icons.FilePlus size={14} />}>
          <NavLink exact to="/tinymceeditor" activeClassName="active">
            Tinymce editor
          </NavLink>
        </MenuHelper.MultiMenu>
        <MenuHelper.MenuSingle path="/fullcalendar" icon={<Icons.Calendar size={14} />} text="Full calendar" />
        <MenuHelper.MenuSingle path="/fileupload" icon={<Icons.UploadCloud size={14} />} text="File upload" />
        <MenuHelper.MenuSingle path="/imagecropper" icon={<Icons.Scissors size={14} />} text="Image cropper" />

        <MenuHelper.Label labelText="Other" />
        <MenuHelper.MultiMenu
          name="Menu levels"
          Icon={<Icons.Menu size={14} />}
        >
          <NavLink exact to="#" activeClassName="active">
            Menu level 2 .1
          </NavLink>
          <MenuHelper>
            <MenuHelper.MultiMenu name="Menu level 2.2">
              <NavLink exact to="#" activeClassName="active">
                Menu level 3.1
              </NavLink>
            </MenuHelper.MultiMenu>
          </MenuHelper>
        </MenuHelper.MultiMenu>
        <MenuHelper.MenuSingle disabled path="#" icon={<Icons.Power size={14} />} text="Disabled menu" />
        <MenuHelper.MenuSingle path="/samplepage" icon={<Icons.Sidebar size={14} />} text="Sample page" />

      </MenuHelper>
    );
  }
}

export default Menus;
