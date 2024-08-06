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
    public class TempAdsController : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: TempAds
        public ActionResult Index()
        {
            var tempAds = db.TempAds;
            return View(tempAds.ToList());
        }

        [HttpPost]
        public ActionResult Index(int approvedAdId)
        {
            var approvedAd = db.TempAds.Find(approvedAdId);
            var newOne = new Ad
            {
                name = approvedAd.name,
                listname = approvedAd.listname,
                areaelection = approvedAd.electionarea,
                description = approvedAd.description,
                image = approvedAd.image
            };
            db.Ads.Add(newOne);
            db.TempAds.Remove(approvedAd);
            db.SaveChanges();

            return RedirectToAction("Index");
        }

        // GET: TempAds/Details/5
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
            TempAd tempAd = db.TempAds.Find(id);
            if (tempAd == null)
            {
                return HttpNotFound();
            }
            return View(tempAd);
        }

        // GET: TempAds/Create
        public ActionResult Create()
        {
            ViewBag.id = new SelectList(db.Ads, "id", "name");
            return View();
        }

        // POST: TempAds/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,name,listname,electionarea,image")] TempAd tempAd)
        {
            if (ModelState.IsValid)
            {
                db.TempAds.Add(tempAd);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.id = new SelectList(db.Ads, "id", "name", tempAd.id);
            return View(tempAd);
        }

        // GET: TempAds/Edit/5
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
            TempAd tempAd = db.TempAds.Find(id);
            if (tempAd == null)
            {
                return HttpNotFound();
            }
            ViewBag.id = new SelectList(db.Ads, "id", "name", tempAd.id);
            return View(tempAd);
        }

        // POST: TempAds/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,name,listname,electionarea,image")] TempAd tempAd)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tempAd).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.id = new SelectList(db.Ads, "id", "name", tempAd.id);
            return View(tempAd);
        }

        // GET: TempAds/Delete/5
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
            TempAd tempAd = db.TempAds.Find(id);
            if (tempAd == null)
            {
                return HttpNotFound();
            }
            return View(tempAd);
        }

        // POST: TempAds/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            TempAd tempAd = db.TempAds.Find(id);
            db.TempAds.Remove(tempAd);
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
