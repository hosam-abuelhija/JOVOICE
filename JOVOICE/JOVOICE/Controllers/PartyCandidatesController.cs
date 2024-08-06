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
    public class PartyCandidatesController : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: PartyCandidates
        public ActionResult Index()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            var partyCandidates = db.PartyCandidates;
            return View(partyCandidates.ToList());
        }

        // GET: PartyCandidates/Details/5
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
            PartyCandidate partyCandidate = db.PartyCandidates.Find(id);
            if (partyCandidate == null)
            {
                return HttpNotFound();
            }
            return View(partyCandidate);
        }

        // GET: PartyCandidates/Create
        public ActionResult Create()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            ViewBag.id = new SelectList(db.TempPartyCandidates, "id", "electionarea");
            return View();
        }

        // POST: PartyCandidates/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,partyname,electionarea,email,national_id,gender,birthdate,religion,ordercandidate,fk_counter")] PartyCandidate partyCandidate)
        {
            if (ModelState.IsValid)
            {
                db.PartyCandidates.Add(partyCandidate);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.id = new SelectList(db.TempPartyCandidates, "id", "electionarea", partyCandidate.id);
            return View(partyCandidate);
        }

        // GET: PartyCandidates/Edit/5
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
            PartyCandidate partyCandidate = db.PartyCandidates.Find(id);
            if (partyCandidate == null)
            {
                return HttpNotFound();
            }
            ViewBag.id = new SelectList(db.TempPartyCandidates, "id", "electionarea", partyCandidate.id);
            return View(partyCandidate);
        }

        // POST: PartyCandidates/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,partyname,electionarea,email,national_id,gender,birthdate,religion,ordercandidate,fk_counter")] PartyCandidate partyCandidate)
        {
            if (ModelState.IsValid)
            {
                db.Entry(partyCandidate).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.id = new SelectList(db.TempPartyCandidates, "id", "electionarea", partyCandidate.id);
            return View(partyCandidate);
        }

        // GET: PartyCandidates/Delete/5
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
            PartyCandidate partyCandidate = db.PartyCandidates.Find(id);
            if (partyCandidate == null)
            {
                return HttpNotFound();
            }
            return View(partyCandidate);
        }

        // POST: PartyCandidates/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            PartyCandidate partyCandidate = db.PartyCandidates.Find(id);
            db.PartyCandidates.Remove(partyCandidate);
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
