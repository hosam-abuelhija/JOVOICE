﻿using JOVOICE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace JOVOICE.Controllers
{
    public class Payment1Controller : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: payments1
        public ActionResult Index()
        {
            return View(db.paymentnews.ToList());
        }

        // GET: payments1/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            paymentnew payment = db.paymentnews.Find(id);
            if (payment == null)
            {
                return HttpNotFound();
            }
            return View(payment);
        }

        // GET: payments1/Create
        public ActionResult Create1()
        {
            return View();
        }

        // POST: payments1/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create1([Bind(Include = "id,email,name,cardnumber,cvv")] paymentnew payment)
        {
            if (ModelState.IsValid)
            {
                db.paymentnews.Add(payment);
                db.SaveChanges();
                return RedirectToAction("Success");
            }

            return View("Success");

        }


        public ActionResult Success()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Success(FormCollection form)
        {

            return RedirectToAction("Index", "Home");
        }
    
    }
}