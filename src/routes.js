import Home from './views/Home'
import RateEdit from './views/RateEdit';
import RateView from './views/RateView';
import StudentDetail from './views/StudentDetail';
import StudentList from './views/StudentList';
export const routes = [
{
    path:  '/',
    exact: true,
    component:Home
},
{
    path:'/student-list',
    exact:true,
    component:StudentList
},
{
    path:'/rate-edit/:rateId',
    exact:true,
    component:RateEdit
},
{
    path:'/student-detail/:studentId',
    exact:true,
    component:StudentDetail
},
{
    path:'/rate-view/:subjectId/:studentId',
    exact:true,
    component:RateView
},
];