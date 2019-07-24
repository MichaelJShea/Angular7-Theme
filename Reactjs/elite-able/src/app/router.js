// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import internal(own) modules
import MainLayoutRoute from "../layout/routes/mainLayoutRoute";
import { SpinnerComponent } from "../components/spinner/Spinner";
import ErrorPage from "../views/maint/errorPage";
import OfflineUi from "../views/maint/offlineUi";
import CommingSoon from "../views/maint/commingSoon";
import AuthSingin from "../views/authentication/authSingin";
import AuthSingin1 from "../views/authentication/authSingin1";
import AuthSingin2 from "../views/authentication/authSingin2";
import AuthSingup from "../views/authentication/authSingup";
import AuthSingup1 from "../views/authentication/authSingup1";
import ChangePassword from "../views/authentication/changePassword";
import Reset from "../views/authentication/resetPassword";
import ProfileSetting from "../views/authentication/profileSetting";

const Analytic = lazy(() => import("../views/dashboard/analytic"));
const Sales = lazy(() => import("../views/dashboard/sales"));
const Crypto = lazy(() => import("../views/dashboard/crypto"));
const Project = lazy(() => import("../views/dashboard/project"));
const HelpDesk = lazy(() => import("../views/dashboard/helpdesk"));
const StatistcWidget = lazy(() => import("../views/widget/statisticWidget"));
const DataWidget = lazy(() => import("../views/widget/dataWidget"));
const Alarts = lazy(() => import("../views/ui-element/basic/alarts"));
const Buttons = lazy(() => import("../views/ui-element/basic/buttons"));
const Badges = lazy(() => import("../views/ui-element/basic/badges"));
const BreadcrumbPagination = lazy(() =>
  import("../views/ui-element/basic/breadcrumbPagination")
);
const Cards = lazy(() => import("../views/ui-element/basic/cards"));
const Carousel = lazy(() => import("../views/ui-element/basic/carousel"));
const Modals = lazy(() => import("../views/ui-element/basic/modals"));
const NavsTabs = lazy(() => import("../views/ui-element/basic/navsTabs"));
const Progresses = lazy(() => import("../views/ui-element/basic/progress"));
const Spinners = lazy(() => import("../views/ui-element/basic/spinners"));
const Toasts = lazy(() => import("../views/ui-element/basic/toasts"));
const TooltipPopover = lazy(() =>
  import("../views/ui-element/basic/tooltipPopover")
);
const Typography = lazy(() => import("../views/ui-element/basic/typography"));
const Collapse = lazy(() => import("../views/ui-element/basic/collapse"));
const Sweetalert = lazy(() => import("../views/ui-element/advance/sweetalert"));
const Datepicker = lazy(() => import("../views/ui-element/advance/datepicker"));
const Lightbox = lazy(() => import("../views/ui-element/advance/lightbox"));
const ModalAdbance = lazy(() => import("../views/ui-element/advance/modal"));
const Notification = lazy(() =>
  import("../views/ui-element/advance/notification")
);
const Nestable = lazy(() => import("../views/ui-element/advance/nestable"));
const Pnotify = lazy(() => import("../views/ui-element/advance/pnotify"));
const Rating = lazy(() => import("../views/ui-element/advance/rating"));
const Todos = lazy(() => import("../views/todo/todo"));
const Note = lazy(() => import("../views/note/note"));
const FormElements = lazy(() => import("../views/forms/elements/formElements"));
const FormElementsAdvance = lazy(() =>
  import("../views/forms/elements-advance/formElementsAdvance")
);
const FormValidation = lazy(() =>
  import("../views/forms/validation/formValidation")
);
const FormMasking = lazy(() => import("../views/forms/masking/formMasking"));
const BasicBtTable = lazy(() => import("../views/table/bootstrap/basicTable"));
const SizingTable = lazy(() => import("../views/table/bootstrap/sizingTable"));
const BorderTable = lazy(() => import("../views/table/bootstrap/borderTable"));
const StylingTable = lazy(() =>
  import("../views/table/bootstrap/stylingTable")
);
const FullCalendar = lazy(() => import("../views/calendar/fullCalendar"));
const FileUpload = lazy(() => import("../views/fileupload/fileUpload"));
const TinymceEditor = lazy(() => import("../views/editor/tinymceEditor"));
const ImageCropper = lazy(() => import("../views/cropper/imageCropper"));
const AmCharts = lazy(() => import("../views/chart/amChart"));
const ChartJs = lazy(() => import("../views/chart/chartJs"));
const EChart = lazy(() => import("../views/chart/eChart"));
const GoogleChart = lazy(() => import("../views/chart/googleChart"));
const GoogleMap = lazy(() => import("../views/maps/googleMap/googleMap"));
const StaticVectorMap = lazy(() => import("../views/maps/vectorMap/vectorMap"));
const GalleryGrid = lazy(() => import("../views/gallery/galleryGrid"));
const GalleryMasonry = lazy(() => import("../views/gallery/galleryMasonry"));
const GalleryAdvance = lazy(() => import("../views/gallery/galleryAdvance"));
const Chat = lazy(() => import("../views/chat/chat"));
const Email = lazy(() => import("../views/email/email"));
const SamplePage = lazy(() => import("../views/others/samplePage"));
const FeatherIcons = lazy(() => import("../views/icons/iconFeather"));
const FlagIcons = lazy(() => import("../views/icons/iconFlag"));

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          {/* Dashboard Views */}
          <MainLayoutRoute
            exact
            path="/"
            title="Home"
            name="Analytics Dashboard"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Analytic {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/sales"
            title="Sales"
            name="Sales Dashboard"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Sales {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/crypto"
            title="Crypto"
            name="Crypto Dashboard"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Crypto {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/project"
            title="Project"
            name="Project Dashboard"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Project {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/helpdesk"
            title="Helpdesk"
            name="Help Dashboard"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <HelpDesk {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/widget/statistic"
            title="Widget statistic"
            name="Widget statistic"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <StatistcWidget {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/widget/data"
            title="Widget Data"
            name="Widget Data"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <DataWidget {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/alert"
            title="Alert"
            name="Basic Alert"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Alarts {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/button"
            title="Buttons"
            name="Basic Buttons"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Buttons {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/badges"
            title="Badges"
            name="Basic Badges"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Badges {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/breadcrumbpagination"
            title="Breadcrumb & Pagination"
            name="Basic Breadcrumb-Pagination"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <BreadcrumbPagination {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/card"
            title="Cards"
            name="Basic Cards"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Cards {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/carousel"
            title="Carousel"
            name="Basic Carousel"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Carousel {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/collapse"
            title="Collapse"
            name="Basic Collapse"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Collapse {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/modals"
            title="Modals"
            name="Basic Modals"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Modals {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/navstabs"
            title="Navs & Tabs"
            name="Basic Navs-Tabs"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <NavsTabs {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/progress"
            title="Progress"
            name="Basic Progress"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Progresses {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/spinners"
            title="Spinners"
            name="Basic Spinners"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Spinners {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/toasts"
            title="Toasts"
            name="Basic Toasts"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Toasts {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/tooltippopover"
            title="Tooltip & Popover"
            name="Basic Tooltip-Popover"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <TooltipPopover {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/typography"
            title="Typography"
            name="Basic Typography"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Typography {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/sweetalert"
            title="Sweetalert"
            name="Advance Sweetalert"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Sweetalert {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/datepicker"
            title="Datepicker"
            name="Advance Datepicker"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Datepicker {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/lightbox"
            title="Lightbox"
            name="Advance Lightbox"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Lightbox {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/modaladbance"
            title="ModalAdbance"
            name="Advance ModalAdbance"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <ModalAdbance {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/notification"
            title="Notification"
            name="Advance Notification"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Notification {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/nestable"
            title="Nestable"
            name="Advance Nestable"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Nestable {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/pnotify"
            title="Pnotify"
            name="Advance Pnotify"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Pnotify {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/rating"
            title="Rating"
            name="Advance Rating"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Rating {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/todo"
            title="To Do"
            name="To Do"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Todos {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/note"
            title="Notes"
            name="Notes"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Note {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/formelements"
            title="Form Elements"
            name="Form Elements"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <FormElements {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/formelementsadvance"
            title="Basic Form Inputs"
            name="Basic Form Inputs"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <FormElementsAdvance {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/formvalidation"
            title="Form Validation"
            name="Form Validation"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <FormValidation {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/formmasking"
            title="Form Masking"
            name="Form Masking"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <FormMasking {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/bt/basictable"
            title="Bootstrap Basic Tables"
            name="Basic Tables"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <BasicBtTable {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/bt/sizingtable"
            title="Bootstrap Table Sizes"
            name="Sizing Table"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <SizingTable {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/bt/bordertable"
            title="Bootstrap Border Sizes"
            name="Border Table"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <BorderTable {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/bt/stylingtable"
            title="Bootstrap Styling Sizes"
            name="Styling Sizes"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <StylingTable {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/fullcalendar"
            title="Full Calendar"
            name="Full Calendar"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <FullCalendar {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/fileupload"
            title="File Upload"
            name="File Upload"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <FileUpload {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/tinymceeditor"
            title="Tinymce Editor"
            name="Tinymce Editor"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <TinymceEditor {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/imagecropper"
            title="Image Cropper"
            name="Image Cropper"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <ImageCropper {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/chart/amchart"
            title="amChart 4"
            name="amChart 4"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <AmCharts {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/chart/chartjs"
            title="Chart js"
            name="Chart js"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <ChartJs {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/chart/echart"
            title="Echart Chart"
            name="Echart Chart"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <EChart {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/chart/googlechart"
            title="Google Chart"
            name="Google Chart"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <GoogleChart {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/map/googlemap"
            title="Google Map"
            name="Google Map"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <GoogleMap {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/map/vectormap"
            title="Vector Map"
            name="Vector Map"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <StaticVectorMap {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/gallery/grid"
            title="Gallery Grid"
            name="Gallery Grid"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <GalleryGrid {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/gallery/masonry"
            title="Gallery Masonry"
            name="Gallery Masonry"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <GalleryMasonry {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/gallery/advance"
            title="Gallery Advance"
            name="Gallery Advance"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <GalleryAdvance {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/app/message"
            title="Message"
            name="Message"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Chat {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/app/email"
            title="Email"
            name="Email"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <Email {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/samplepage"
            title="Sample Page"
            name="Sample Page"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <SamplePage {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/icon/feather"
            title="Feather"
            name="Feather Icon"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <FeatherIcons {...matchprops} />
              </Suspense>
            )}
          />
          <MainLayoutRoute
            exact
            path="/icon/flag"
            title="Flag"
            name="Flag Icon"
            render={matchprops => (
              <Suspense fallback={<SpinnerComponent />}>
                <FlagIcons {...matchprops} />
              </Suspense>
            )}
          />

          <Route path="/error" component={ErrorPage} />
          <Route path="/offline" component={OfflineUi} />
          <Route path="/comming" component={CommingSoon} />
          <Route path="/authsingup" component={AuthSingup} />
          <Route path="/authsingup1" component={AuthSingup1} />
          <Route path="/authsingin" component={AuthSingin} />
          <Route path="/authsingin1" component={AuthSingin1} />
          <Route path="/authsingin2" component={AuthSingin2} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/reset-password" component={Reset} />
          <Route path="/profile-setting" component={ProfileSetting} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
