using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using JOVOICE.Models;

namespace JOVOICE.Controllers
{
    public class TempAdsHadeelController : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: TempAdsHadeel
        public ActionResult Index()
        {
            return View(db.TempAds.ToList());
        }

        // GET: TempAdsHadeel/Details/5
        public ActionResult Details(long? id)
        {
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

        // GET: TempAdsHadeel/Create
        public ActionResult Create1()
        {
            return View();
        }

        // POST: TempAdsHadeel/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create1([Bind(Include = "id,name,listname,electionarea,image,description")] TempAd tempAd)
        {
            if (ModelState.IsValid)
            {
                db.TempAds.Add(tempAd);
                db.SaveChanges();
                return RedirectToAction("Payment", "Home");
            }

            return View(tempAd);
        }

        // GET: TempAdsHadeel/Edit/5
        public ActionResult Edit(long? id)
        {
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

        // POST: TempAdsHadeel/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,name,listname,electionarea,image,description")] TempAd tempAd, HttpPostedFileBase upload)
        {

            var fileName = Path.GetFileName(upload.FileName);
            var path = Path.Combine(Server.MapPath("~/Images/"), fileName);


            upload.SaveAs(path);
            tempAd.image = fileName;

            if (ModelState.IsValid)
            {
                db.TempAds.Add(tempAd);
                db.SaveChanges();
                return RedirectToAction("Index", "TempAdsHadeel");
            }

            ViewBag.id = new SelectList(db.Ads, "id", "name", tempAd.id);
            db.SaveChanges();
            return View();
           
        }

        // GET: TempAdsHadeel/Delete/5
        public ActionResult Delete(long? id)
        {
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

        // POST: TempAdsHadeel/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            TempAd tempAd = db.TempAds.Find(id);
            db.TempAds.Remove(tempAd);
            db.SaveChanges();
            return RedirectToAction("Index", "TempAdsHadeel");
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
