import React from "react";
import style from "@/styles/pages/Profile.module.scss"
import { MdOutlineModeEdit, MdOutlineAccountCircle } from "react-icons/md"
import { RxClipboard } from "react-icons/rx"
import { HiOutlineLocationMarker } from "react-icons/hi"
import Link from 'next/link';



export default function MyProfile() {

  return (
    <>
      <div className={`row ${style.bg}`}>
        <div className={`col-4 ${style.box}`}>
          <div className={`sidebar m-0 ${style.sidebar}`}>
            <div className={style.content}>
              <div className="header">
                <div className="list-item d-flex align-items-center mt-5">
                  <Link href="#">
                    <img src="/images/profile/pp.webp" alt="profile" className={style.picture} />
                  </Link>

                  <div className="m-2">
                    <h5>Johannes Mikael</h5>
                    <Link href="#" className="text-secondary">
                      <MdOutlineModeEdit /> Ubah Profile
                    </Link>
                  </div>
                </div>
              </div>


              <div className="main-content">
                <div className="row mt-5 text-left">
                  <div className="col-12 mb-4">
                    <Link href="#account" className={style.list}>
                      <span className="bg-black">
                        <MdOutlineAccountCircle />
                      </span>
                      <span> My Account</span>
                    </Link>
                  </div>
                  <div className="col-12 mb-4">
                    <Link href="#address" className={style.list}>
                      <HiOutlineLocationMarker /><span> Shipping Address</span>
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link href="#order" className={style.list}>
                      <RxClipboard /><span> My Order</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-7">
          <section id="account">
            <div className={`card ${style.card}`}>
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
                            <input type="text" class={`form-control ${style.in}`} id="exampleInputName" />
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div className="row">
                          <div className="col-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                          </div>
                          <div className="col-9">
                            <input type="email" class={`form-control ${style.in}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                            <input class={`form-check-input ${style.check}`} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Male
                            </label>
                          </div>
                        </div>
                        <div className="col-4">
                          <div class="form-check">
                            <input class={`form-check-input ${style.check}`} type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
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
                            <input type="date" class="btn btn-light date" />

                          </div>

                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-3"></div>
                        <div className="col-9">
                          <button type="submit" class={`btn btn-primary rounded-5 ${style.submit}`}>Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-3 text-center">
                    <div className={style.border}>
                      <img src="/images/profile/pp.webp" alt="profile" className="rounded-circle mt-4" />
                      <button className={`btn btn-light rounded-5 mt-3 ${style.edit}`}>Select Image</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="address">
            <div className={`card mb-5 ${style.card}`}>
              <div className="card-header">
                <h3>Choose another address</h3>
                <p>Manage your shipping address</p>
              </div>
              <div className="container">
                <div className="card-body">
                  <button type="button" className={`btn btn-light ${style.dashed}`} data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Address</button>

                  {/* <!-- Modal --> */}
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <input class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Home" />
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <label for="name" className="form-label">Recipient's name</label>
                                  <input className="form-control" id="name" type="text" />
                                </div>
                                <div className="col-6">
                                  <label for="phone" className="form-label">Recipient's phone number</label>
                                  <input className="form-control" id="phone" type="number" />
                                </div>
                                <div className="col-6">
                                  <label for="address" className="form-label">Address</label>
                                  <input className="form-control" id="address" type="text" />
                                </div>
                                <div className="col-6">
                                  <label for="post" className="form-label">Postal code</label>
                                  <input className="form-control" id="post" type="text" />
                                </div>
                                <div className="col-6">
                                  <label for="city" className="form-label">City or subdistric</label>
                                  <input className="form-control" id="city" type="text" />
                                </div>
                              </div>

                            </div>
                            <div class="modal-footer">
                              <button type="button" class={`btn btn-outline-dark rounded-5 ${style.submit}`} data-bs-dismiss="modal">Cancel</button>
                              <button type="button" class={`btn btn-primary rounded-5 ${style.submit}`}>Save</button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card mt-5">
                    <div className="container m-2">
                      <h5>Andreas Jane</h5>
                      <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                      <a href="#" className="text-danger">Change Address</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="order">
            <div className={`card mb-5 ${style.card}`}>
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
    </>
  );
};
