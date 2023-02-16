import React from "react";
import style from "@/styles/pages/Profile.module.scss"
import { MdOutlineModeEdit } from "react-icons/md"
import { IoStorefront } from "react-icons/io5"
import { RxClipboard } from "react-icons/rx"
import { HiOutlineLocationMarker } from "react-icons/hi"
import Link from 'next/link';

export default function Seller() {

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

                    {/* <span className={style.list} data-bs-toggle="collapse" href="#store" role="button" aria-expanded="false" aria-controls="store">
           <IoStorefront style={{ width: "25px", height: "25px", marginRight: "20px" }} />
           <span>Store</span>
          </span>
          <div class="collapse" id="store">
           <div class="card card-body">
           <Link href="#store" className={style.list}>Store Profile</Link>
           </div>
          </div> */}
                    {/* <Link href="#store" className={style.list}>
            <IoStorefront style={{ width: "25px", height: "25px" }} />
            <span>Store</span>
           </Link> */}
                  </div>
                  <div className="col-12 mb-4">
                    <Link href="#address" className={style.list}>
                      <HiOutlineLocationMarker style={{ width: "25px", height: "25px" }} /><span> Shipping Address</span>
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link href="#order" className={style.list}>
                      <RxClipboard style={{ width: "25px", height: "25px" }} /><span> My Order</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}