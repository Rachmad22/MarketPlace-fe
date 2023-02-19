import React, { useState } from "react";
import style from "@/styles/pages/Profile.module.scss"
import Link from 'next/link';
import axios from "axios";
import Head from "next/head";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { useSelector } from "react-redux";

export default function MyProfile(props) {

  const { profile, address } = props

  const [email, setEmail] = React.useState("");
  const [photo, setPhoto] = React.useState(null);
  const [phone_number, setPhone_number] = React.useState("");
  const [name, setName] = React.useState("");
  const [date_of_birth, setDate_of_birth] = React.useState("");
  const [gender, setGender] = React.useState()

  const [address_alias, setAddress_alias] = React.useState("")
  const [recipient_name, setRecipient_name] = React.useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [postal_code, setPostal_code] = React.useState("")
  const [recipient_phone_number, setRecipient_phone_number] = useState("")

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  const selector = useSelector((state)=>state.profile)
  React.useEffect(()=>{
console.log(selector)
  },[])

  const handleEdit = async () => {
    try {
      setIsLoading(true)
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyMywibmFtZSI6IkFuZG8iLCJlbWFpbCI6InJlc3R1QGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4OTY4Nzg3OCIsInN0b3JlX25hbWUiOiJhbHZpYW5kbyBzdG9yZSIsInJvbGUiOmZhbHNlLCJwaG90byI6Imh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHptYWdpaGZ1L2ltYWdlL3VwbG9hZC92MTY3Njc5MzYyOS82NmY0NWYxZC0yM2YwLTRmOTItYjM0ZC0zMDVkZTdjZmMyYTYuanBnIiwiZGF0ZV9vZl9iaXJ0aCI6bnVsbCwiZ2VuZGVyIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0xOFQyMDo1NTozMC4xNDZaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMTlUMTA6MzM6MjcuMDAwWiJ9LCJpYXQiOjE2NzY4MDc2ODcsImV4cCI6MTY3NjgxMTI4N30.2ROMXrlEJFXjwJngv3-hqGxKVc3vgD1czZfgGevTvgU"

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.patch(`/api/edit`, {
        name,
        email,
        phone_number,
        photo,
        date_of_birth,
        gender,
      }, config);
      setIsLoading(false);
      setError(null);
      // console.log(photo)
    } catch (error) {
      setIsLoading(false);
      setError(
        error?.response?.data?.message ?? error?.response?.data?.message?.email?.message ?? error?.response?.data?.message?.name?.message ?? error?.response?.data?.message?.phone_number?.message ?? error?.response?.data?.message?.photo?.message ?? "Something wrong in our server"
      );
      // console.log(error.response)
    }
  };




  const handleAddAddress = async () => {
    try {
      setIsLoading(true);

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyMywibmFtZSI6IkFuZG8iLCJlbWFpbCI6InJlc3R1QGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4OTY4Nzg3OCIsInN0b3JlX25hbWUiOiJhbHZpYW5kbyBzdG9yZSIsInJvbGUiOmZhbHNlLCJwaG90byI6Imh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHptYWdpaGZ1L2ltYWdlL3VwbG9hZC92MTY3Njc5MzYyOS82NmY0NWYxZC0yM2YwLTRmOTItYjM0ZC0zMDVkZTdjZmMyYTYuanBnIiwiZGF0ZV9vZl9iaXJ0aCI6bnVsbCwiZ2VuZGVyIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0xOFQyMDo1NTozMC4xNDZaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMTlUMTA6MzM6MjcuMDAwWiJ9LCJpYXQiOjE2NzY4MDc2ODcsImV4cCI6MTY3NjgxMTI4N30.2ROMXrlEJFXjwJngv3-hqGxKVc3vgD1czZfgGevTvgU"

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      // console.log(name)
      await axios.post(`/api/addAddress`, {
        address_alias,
        recipient_name,
        street,
        city,
        postal_code,
        recipient_phone_number,
      }, config);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(
        error?.response?.data?.message ?? error?.response?.data?.message?.email?.message ?? error?.response?.data?.message?.name?.message ?? error?.response?.data?.message?.phone_number?.message ?? error?.response?.data?.message?.photo?.message ?? "Something wrong in our server"
      );
      // console.log(error.response)
    }
  };

  return (
    <>
      <Head>
        <title>Profile | Blanja</title>
      </Head>
      <Navbar />
      <div className={`row ${style.bg}`}>

        {/* Sidebar */}
        <div className={`col-4 ${style.box}`}>
          <div className={`sidebar m-0 ${style.sidebar}`}>
            <div className={style.content}>
              <div className="header">
                <div className="list-item d-flex align-items-center mt-5">
                  <Link href="#">
                    <img src={profile?.data[0]?.photo || `https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg`} alt="profile" className={style.picture} />
                  </Link>

                  <div className="m-2">
                    <h5>{profile?.data[0]?.name}</h5>
                    <Link href="#" className="text-secondary">
                      <p class='bx bx-edit-alt'> Ubah Profile</p>
                    </Link>
                  </div>
                </div>
              </div>


              <div className="main-content">
                <div className="row mt-5 text-left">
                  <div className="col-12 mb-4">
                    <Link href="#account" className={style.list}>
                      <span class='bx bxs-user-account'> My Account</span>
                    </Link>
                  </div>
                  <div className="col-12 mb-4">
                    <Link href="#address" className={`d-flex align-items-center ${style.list}`}>
                      <span class='bx bxs-map'> Shipping Address</span>
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link href="#order" className={style.list}>
                      <span class='bx bx-clipboard'> My Order</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sidebar */}

        {/* main content */}
        <div className="col-7 m-5">

          {/* Account */}
          <section id="account">
            <div className={`card mb-5 ${style.card}`}>
              <div className="card-header">
                <h3>My Profile</h3>
                <p className="text-secondary">Manage your profile information</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-9">

                    <form>
                      <div class="mb-3">
                        <div className="row">
                          <div className="col-3">
                            <label for="exampleInputName" class="form-label">Name</label>
                          </div>
                          <div className="col-9">
                            <input type="text" class={`form-control ${style.in}`} id="exampleInputName" placeholder={profile?.data[0]?.name} onChange={(event) => setName(event.target.value)} />
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div className="row">
                          <div className="col-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                          </div>
                          <div className="col-9">
                            <input type="email" class={`form-control ${style.in}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={profile?.data[0]?.email} onChange={(event) => setEmail(event.target.value)} />
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div className="row">
                          <div className="col-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label mt-3"
                            >
                              Phone Number
                            </label>
                          </div>
                          <div className="col-9">
                            <input
                              type="number"
                              class={`form-control phone ${style.in}`}
                              id="exampleFormControlInput1"
                              placeholder={profile?.data[0]?.phone_number}
                              onChange={(event) => setPhone_number(event.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-3">
                          <label>Gender</label>
                        </div>
                        <div className="col-4">

                          <div class="form-check">
                            <input class={`form-check-input ${style.check}`} type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="true" onChange={(event) => setGender(event.target.value)} />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Male
                            </label>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-check">
                            <input class={`form-check-input ${style.check}`} type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="false" onChange={(event) => setGender(event.target.value)} />
                            <label class="form-check-label" for="flexRadioDefault2">
                              Female
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-3">
                          <label>Date of birth</label>
                        </div>
                        <div className="col-9">
                          <div
                            className="dropdown-date-city"
                          >
                            <input type="date" class="btn btn-light date" onChange={(event) => setDate_of_birth(event.target.value)} />

                          </div>

                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-3"></div>
                        <div className="col-9">
                          <button type="submit" class={`btn btn-primary rounded-5 mt-4 ${style.submit}`} onClick={handleEdit} disabled={isLoading}>{isLoading ? "Loading..." : "Save"}</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-3 text-center">
                    <div className={style.border}>
                      <img src={profile?.data[0]?.photo || `https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg`} alt="profile" className="rounded-circle mt-4" style={{ width: "100px", height: "100px" }} />

                      <button data-bs-toggle="modal" data-bs-target="#image" className={`btn btn-light rounded-5 mt-3 ${style.edit}`}>Select Image</button>

                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="image" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="staticBackdropLabel">Profile Picture</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                              <div className="mb-3">
                                <label for="formFile" className="form-label">Upload your profile picture</label>
                                <input className="form-control" type="file" id="formFile" onChange={(event) =>
                                  setPhoto(event.target.files[0])} />
                              </div>

                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleEdit} disabled={isLoading}>{isLoading ? "Loading..." : "Save"}</button>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Shipping Address */}
          <section id="address">
            <div className={`card mb-5 ${style.card}`}>
              <div className="card-header">
                <h3>Choose another address</h3>
                <p>Manage your shipping address</p>
              </div>
              <div className="container">
                <div className="card-body">
                  <button type="button" className={`btn btn-light ${style.dashed}`} data-bs-toggle="modal" data-bs-target="#addAddress">Add New Address</button>

                  {/* <!-- Modal --> */}
                  <div class="modal fade" id="addAddress" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                      <div class="modal-content">
                        <div class="modal-header mx-auto">
                          <h1 class="modal-title fs-3" id="exampleModalLabel">Add New Address</h1>
                        </div>
                        <div class="modal-body">
                          <div className="row">
                            <div className="col-12">
                              <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Save address as (ex: home address, office address)</label>
                                <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Home" onChange={(e) => setAddress_alias(e.target.value)} />
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <label for="name" className="form-label">Recipient&apos;s name</label>
                                  <input className="form-control" id="name" type="text" onChange={(e) => setRecipient_name(e.target.value)} />
                                </div>
                                <div className="col-6">
                                  <label for="phone" className="form-label">Recipient&apos;s phone number</label>
                                  <input className="form-control" id="phone" type="number" onChange={(e) => setRecipient_phone_number(e.target.value)} />
                                </div>
                                <div className="col-6">
                                  <label for="address" className="form-label">Address</label>
                                  <input className="form-control" id="address" type="text" onChange={(e) => setStreet(e.target.value)} />
                                </div>
                                <div className="col-6">
                                  <label for="post" className="form-label">Postal code</label>
                                  <input className="form-control" id="post" type="text" onChange={(e) => setPostal_code(e.target.value)} />
                                </div>
                                <div className="col-6">
                                  <label for="city" className="form-label">City or subdistric</label>
                                  <input className="form-control" id="city" type="text" onChange={(e) => setCity(e.target.value)} />
                                </div>
                              </div>

                            </div>
                            <div class="modal-footer">
                              <button type="button" class={`btn btn-outline-dark rounded-5 ${style.submit}`} data-bs-dismiss="modal">Cancel</button>
                              <button type="button" class={`btn btn-primary rounded-5 ${style.submit}`} onClick={handleAddAddress} disabled={isLoading}>{isLoading ? "Loading..." : "Save"}</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="mt-5">
                    <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined1" autocomplete="off" />
                    <label className="btn btn-outline-danger mb-3" for="danger-outlined1">
                      <div className="container m-2 text-lg-start text-dark">
                        <h5>{address?.data[0]?.recipient_name}</h5>
                        <h6>{address?.data[0]?.address_alias}</h6>
                        <p>{address?.data[0]?.street}, {address?.data[0]?.city}, {address?.data[0]?.postal_code}, <br /> hp: {address?.data[0]?.recipient_phone_number}</p>
                        <span href="#" className="" data-bs-toggle="modal" data-bs-target="#addAddress">Change Address</span>
                      </div>
                    </label>

                    {/* <input type="radio" className={`btn-check ${style.address}`} name="options-outlined" id="danger-outlined" autocomplete="off" />
          <label className="btn btn-outline-danger mb-3" for="danger-outlined">
           <div className="container m-2 text-lg-start text-black">
            <h5>Andreas Jane</h5>
            <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <span href="#" className="" data-bs-toggle="modal" data-bs-target="#addAddress">Change Address</span>
           </div>
          </label> */}
                  </div>


                </div>
              </div>
            </div>
          </section>

          {/* Order */}
          <section id="order">
            <div className={`card mb-5 ${style.cardOrder}`}>
              <div className="card-header">
                <h5>My Order</h5>
              </div>
              <div className="card-body">
                <ul class="nav nav-tabs">
                  <li class={`nav-item ${style.font}`}>
                    <Link class={`nav-link ${style.font}`} aria-current="page" href="#">All items</Link>
                  </li>
                  <li class={`nav-item ${style.font}`}>
                    <Link class={`nav-link ${style.font}`} href="#">Not yet paid</Link>
                  </li>
                  <li class={`nav-item ${style.font}`}>
                    <Link class={`nav-link ${style.font}`} href="#">Packed</Link>
                  </li>
                  <li class={`nav-item ${style.font}`}>
                    <Link class={`nav-link ${style.font}`} href="#">Sent</Link>
                  </li>
                  <li class={`nav-item ${style.font}`}>
                    <Link class={`nav-link ${style.font}`} href="#">Completed</Link>
                  </li>
                  <li class={`nav-item ${style.font}`}>
                    <Link class={`nav-link ${style.font}`} href="#">Order cancel</Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* End main content */}
      <Footer />
    </>
  );
};


export async function getStaticProps(context) {

  console.log(context)
  // const selector = useSelector((state)=>state.profile)
  // console.log(selector)
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyMywibmFtZSI6IkFuZG8iLCJlbWFpbCI6InJlc3R1QGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4OTY4Nzg3OCIsInN0b3JlX25hbWUiOiJhbHZpYW5kbyBzdG9yZSIsInJvbGUiOmZhbHNlLCJwaG90byI6Imh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHptYWdpaGZ1L2ltYWdlL3VwbG9hZC92MTY3Njc5MzYyOS82NmY0NWYxZC0yM2YwLTRmOTItYjM0ZC0zMDVkZTdjZmMyYTYuanBnIiwiZGF0ZV9vZl9iaXJ0aCI6bnVsbCwiZ2VuZGVyIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0xOFQyMDo1NTozMC4xNDZaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMTlUMTA6MzM6MjcuMDAwWiJ9LCJpYXQiOjE2NzY4MDc2ODcsImV4cCI6MTY3NjgxMTI4N30.2ROMXrlEJFXjwJngv3-hqGxKVc3vgD1czZfgGevTvgU"
  // const config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const profile = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/23`)
  const convertData = profile.data

  // const address = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/addresses/users/23`, )
  // const convertAddress = address.data

  // const addAddress = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/addresses`, config)
  // const convertAdd = addAddress.data
  // const editProfile =await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/users/update/6`)
  // convertEdit = editProfile.data

  return {
    props: {
      profile: convertData,
      // address: convertAddress,
    },// will be passed to the page component as props
    revalidate: 10,
  }
}