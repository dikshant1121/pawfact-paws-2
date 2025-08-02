import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Component/Page/About"
import Blog  from"./Component/Page/Blog"
import Contact from"./Component/Page/Contact"
import Home from"./Component/Page/Home"
import Error from "./Component/Page/Error"
import Layout from "./Component/Layouts/Layout"
import Login from "./Component/Auth/Login"
import Register from "./Component/Auth/Register"
import RegisterNGO from "./Component/Auth/RegisterNGO"
import Services from "./Component/Page/Services"
import { ToastContainer } from "react-toastify"
import AdminLayout from "./Component/Layouts/AdminLayout"
import AddBreed from "./Component/Admin/Breeds/AddBreed"
import NGOLayout from "./Component/Layouts/NGOLayout"
import PetsListing from "./Component/NGO/Pets/PetsListing"
import AddNgo from "./Component/Admin/Ngo/AddNGO"
import AdoptionRequest from "./Component/Page/AdoptionRequest"
import ManageBreed from "./Component/Admin/Breeds/ManageBreed"
import ManageNGO from "./Component/Admin/Ngo/ManageNGO"
import ManageUsers from "./Component/Admin/Users/ManageUsers"
import ViewAdoptionRequest from "./Component/Admin/AdoptionRequest/ViewAdoptionRequest"
import ManagePetListing from "./Component/Admin/PetListing/ManagePetListing"
import ManagePetsListing from "./Component/NGO/Pets/ManagePetsListing"
import ViewAdoptionRequests from "./Component/NGO/AdoptionRequests/ViewAdoptionRequests"
import ViewBreeds from "./Component/Page/ViewBreed"
import ViewNGO from "./Component/Page/ViewNGO"
import ViewPets from "./Component/Page/ViewPets"
import ManageAdoptionRequest from "./Component/NGO/AdoptionRequests/ManageAdoptionRequest"
import UpdateBreed from "./Component/Admin/Breeds/UpdateBreed"
import UpdateNgo from "./Component/Admin/Ngo/UpdateNGO"
import UpdatePetsListing from "./Component/Admin/PetListing/UpdatePetListing"
import UpdateUser from "./Component/Admin/Users/UpdateUsers"
import UpdatePetsListings from "./Component/NGO/Pets/UpdatePetListings"
import UpdateAdoptionRequest from "./Component/NGO/AdoptionRequests/UpdateAdoptionRequest"
import Dashboard from "./Component/Admin/Pages/Dashboard"
import DashboardNgo from "./Component/NGO/Pages/Dashboard"
import PetDetail from "./Component/Page/PetDetails"
function App() {
  return (
    //
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="adoption" element={<AdoptionRequest/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="registerNGO" element={<RegisterNGO/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="viewBreed" element={<ViewBreeds/>}/>
            <Route path="viewNGO" element={<ViewNGO/>}/>
            <Route path="viewPets" element={<ViewPets/>}/>
            <Route path="viewPets/:breedId" element={<ViewPets/>}/>
            <Route path="viewpets/details/:id" element={<PetDetail/>}/>

          </Route>

          {/* admin routes */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="breed/add" element={<AddBreed/>}/>
            <Route path="ngo/add" element={<AddNgo/>}/>
            <Route path="breed/manage" element={<ManageBreed />}/>
            <Route path="breed/edit/:id" element={<UpdateBreed />}/>
            <Route path="ngo/manage" element={<ManageNGO />}/>
            <Route path="ngo/edit/:id" element={<UpdateNgo />}/>
            <Route path="users/manage" element={<ManageUsers />}/>
            <Route path="user/edit/:id" element={<UpdateUser />}/>
            <Route path="adoptionRequest/view" element={<ViewAdoptionRequest />}/>
            <Route path="petListing/manage" element={<ManagePetListing />}/>
            <Route path="petListing/edit/:id" element={<UpdatePetsListing />}/>


             
          </Route>

          {/* NGO routes */}
           <Route path="/NGO" element={<NGOLayout/>}>
            <Route index element={<DashboardNgo/>}/>
            <Route path="pet/add" element={<PetsListing/>}/>
            <Route path="pets/manage" element={<ManagePetsListing/>}/>
            <Route path="petListings/edit/:id" element={<UpdatePetsListings />}/>
            <Route path="adoptionRequests/view" element={<ViewAdoptionRequests/>}/>
            <Route path="adoptionRequest/Manage" element={<ManageAdoptionRequest/>}/>
            <Route path="adoptionRequest/edit/:id" element={<UpdateAdoptionRequest/>}/>

            {/* <Route path="registerNGO" element={<RegisterNGO/>}/> */}
          </Route>

          

          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
