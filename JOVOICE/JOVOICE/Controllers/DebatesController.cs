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
    public class DebatesController : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: Debates
        public ActionResult Index()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            var debates = db.Debates;
            return View(debates.ToList());
        }

        // GET: Debates/Details/5
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
            Debate debate = db.Debates.Find(id);
            if (debate == null)
            {
                return HttpNotFound();
            }
            return View(debate);
        }

        // GET: Debates/Create
        public ActionResult Create()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            ViewBag.id = new SelectList(db.TempDebates, "id", "listname");
            return View();
        }

        // POST: Debates/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,listname,areaelection,time,description")] Debate debate)
        {
            if (ModelState.IsValid)
            {
                db.Debates.Add(debate);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.id = new SelectList(db.TempDebates, "id", "listname", debate.id);
            return View(debate);
        }

        // GET: Debates/Edit/5
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
            Debate debate = db.Debates.Find(id);
            if (debate == null)
            {
                return HttpNotFound();
            }
            ViewBag.id = new SelectList(db.TempDebates, "id", "listname", debate.id);
            return View(debate);
        }

        // POST: Debates/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,listname,areaelection,time,description")] Debate debate)
        {
            if (ModelState.IsValid)
            {
                db.Entry(debate).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.id = new SelectList(db.TempDebates, "id", "listname", debate.id);
            return View(debate);
        }

        // GET: Debates/Delete/5
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
            Debate debate = db.Debates.Find(id);
            if (debate == null)
            {
                return HttpNotFound();
            }
            return View(debate);
        }

        // POST: Debates/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            Debate debate = db.Debates.Find(id);
            db.Debates.Remove(debate);
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
