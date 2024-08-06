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
    public class TempDebatesController : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: TempDebates
        public ActionResult Index()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            var tempDebates = db.TempDebates;
            return View(tempDebates.ToList());


        }

        [HttpPost]
        public ActionResult Index(int approvedDebateId)
        {
            var approvedDebate = db.TempDebates.Find(approvedDebateId);
            var newOne = new Debate
            {
                listname = approvedDebate.listname,
                areaelection = approvedDebate.areaelection,
                description = approvedDebate.description,
                time = approvedDebate.time
            };
            db.Debates.Add(newOne);
            db.TempDebates.Remove(approvedDebate);
            db.SaveChanges();

            return RedirectToAction("Index");
        }

        // GET: TempDebates/Details/5
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
            TempDebate tempDebate = db.TempDebates.Find(id);
            if (tempDebate == null)
            {
                return HttpNotFound();
            }
            return View(tempDebate);
        }

        // GET: TempDebates/Create
        public ActionResult Create()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            ViewBag.id = new SelectList(db.Debates, "id", "listname");
            return View();
        }

        // POST: TempDebates/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,listname,areaelection,time,description")] TempDebate tempDebate)
        {
            if (ModelState.IsValid)
            {
                db.TempDebates.Add(tempDebate);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.id = new SelectList(db.Debates, "id", "listname", tempDebate.id);
            return View(tempDebate);
        }

        // GET: TempDebates/Edit/5
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
            TempDebate tempDebate = db.TempDebates.Find(id);
            if (tempDebate == null)
            {
                return HttpNotFound();
            }
            ViewBag.id = new SelectList(db.Debates, "id", "listname", tempDebate.id);
            return View(tempDebate);
        }

        // POST: TempDebates/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,listname,areaelection,time,description")] TempDebate tempDebate)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tempDebate).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.id = new SelectList(db.Debates, "id", "listname", tempDebate.id);
            return View(tempDebate);
        }

        // GET: TempDebates/Delete/5
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
            TempDebate tempDebate = db.TempDebates.Find(id);
            if (tempDebate == null)
            {
                return HttpNotFound();
            }
            return View(tempDebate);
        }

        // POST: TempDebates/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            TempDebate tempDebate = db.TempDebates.Find(id);
            db.TempDebates.Remove(tempDebate);
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

        public ActionResult CreateDebate()
        {
            ViewBag.id = new SelectList(db.Debates, "id", "listname");
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult CreateDebate([Bind(Include = "id,listname,areaelection,time,description,candidateName,phoneNo,email")] TempDebate tempDebate)
        {
            if (ModelState.IsValid)
            {
                db.TempDebates.Add(tempDebate);

                db.SaveChanges();
                return RedirectToAction("Success");
            }

            ViewBag.id = new SelectList(db.Debates, "id", "listname", tempDebate.id);
            return View(tempDebate);
        }


        public ActionResult Success()
        {
            var tempDebates = db.TempDebates;
            return View(tempDebates.ToList());
        }

    }
}
