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
    public class LocalListsController : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: LocalLists
        public ActionResult Index()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            return View(db.LocalLists.ToList());
        }

        // GET: LocalLists/Details/5
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
            LocalList localList = db.LocalLists.Find(id);
            if (localList == null)
            {
                return HttpNotFound();
            }
            return View(localList);
        }

        // GET: LocalLists/Create
        public ActionResult Create()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            return View();
        }

        // POST: LocalLists/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,listname,electionDistrict")] LocalList localList)
        {
            if (ModelState.IsValid)
            {
                db.LocalLists.Add(localList);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(localList);
        }

        // GET: LocalLists/Edit/5
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
            LocalList localList = db.LocalLists.Find(id);
            if (localList == null)
            {
                return HttpNotFound();
            }
            return View(localList);
        }

        // POST: LocalLists/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,listname,electionDistrict")] LocalList localList)
        {
            if (ModelState.IsValid)
            {
                db.Entry(localList).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(localList);
        }

        // GET: LocalLists/Delete/5
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
            LocalList localList = db.LocalLists.Find(id);
            if (localList == null)
            {
                return HttpNotFound();
            }
            return View(localList);
        }

        // POST: LocalLists/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            LocalList localList = db.LocalLists.Find(id);
            db.LocalLists.Remove(localList);
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
