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
    public class LocalCandidatesController : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: LocalCandidates
        public ActionResult Index()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            var localCandidates = db.LocalCandidates;
            return View(localCandidates.ToList());
        }

        // GET: LocalCandidates/Details/5
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
            LocalCandidate localCandidate = db.LocalCandidates.Find(id);
            if (localCandidate == null)
            {
                return HttpNotFound();
            }
            return View(localCandidate);
        }

        // GET: LocalCandidates/Create
        public ActionResult Create()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            ViewBag.id = new SelectList(db.TempCandidateLocals, "id", "name");
            return View();
        }

        // POST: LocalCandidates/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,national_id,name,listname,type_of_chair,gender,birthdate,votes_counter,religion,fk_local_vote,electionarea")] LocalCandidate localCandidate)
        {
            if (ModelState.IsValid)
            {
                db.LocalCandidates.Add(localCandidate);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.id = new SelectList(db.TempCandidateLocals, "id", "name", localCandidate.id);
            return View(localCandidate);
        }

        // GET: LocalCandidates/Edit/5
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
            LocalCandidate localCandidate = db.LocalCandidates.Find(id);
            if (localCandidate == null)
            {
                return HttpNotFound();
            }
            ViewBag.id = new SelectList(db.TempCandidateLocals, "id", "name", localCandidate.id);
            return View(localCandidate);
        }

        // POST: LocalCandidates/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,national_id,name,listname,type_of_chair,gender,birthdate,votes_counter,religion,fk_local_vote,electionarea")] LocalCandidate localCandidate)
        {
            if (ModelState.IsValid)
            {
                db.Entry(localCandidate).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.id = new SelectList(db.TempCandidateLocals, "id", "name", localCandidate.id);
            return View(localCandidate);
        }

        // GET: LocalCandidates/Delete/5
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
            LocalCandidate localCandidate = db.LocalCandidates.Find(id);
            if (localCandidate == null)
            {
                return HttpNotFound();
            }
            return View(localCandidate);
        }

        // POST: LocalCandidates/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            LocalCandidate localCandidate = db.LocalCandidates.Find(id);
            db.LocalCandidates.Remove(localCandidate);
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
