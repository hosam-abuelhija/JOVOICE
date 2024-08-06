using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using JOVOICE.Models;

namespace JOVOICE.Controllers
{
    public class PartyListsController : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: PartyLists
        public ActionResult Index()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            return View(db.PartyLists.ToList());
        }

        // GET: PartyLists/Details/5
        public ActionResult Details(long? id)
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PartyList partyList = db.PartyLists.Find(id);
            if (partyList == null)
            {
                return HttpNotFound();
            }
            return View(partyList);
        }

        // GET: PartyLists/Create
        public ActionResult Create()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            return View();
        }

        // POST: PartyLists/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,listname,electionDistrict")] PartyList partyList)
        {
            if (ModelState.IsValid)
            {
                db.PartyLists.Add(partyList);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(partyList);
        }

        // GET: PartyLists/Edit/5
        public ActionResult Edit(long? id)
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PartyList partyList = db.PartyLists.Find(id);
            if (partyList == null)
            {
                return HttpNotFound();
            }
            return View(partyList);
        }

        // POST: PartyLists/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,listname,electionDistrict")] PartyList partyList)
        {
            if (ModelState.IsValid)
            {
                db.Entry(partyList).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(partyList);
        }

        // GET: PartyLists/Delete/5
        public ActionResult Delete(long? id)
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PartyList partyList = db.PartyLists.Find(id);
            if (partyList == null)
            {
                return HttpNotFound();
            }
            return View(partyList);
        }

        // POST: PartyLists/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            PartyList partyList = db.PartyLists.Find(id);
            db.PartyLists.Remove(partyList);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
