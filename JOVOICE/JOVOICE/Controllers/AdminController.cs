using JOVOICE.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace JOVOICE.Controllers
{
    public class AdminController : Controller
    {

        private ElectionEntities db = new ElectionEntities();

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string Username, string Password)
        {
            var admin = db.Admins.SingleOrDefault(u => u.username == Username);
            if (admin != null && admin.password == Password)
            {
                Session["id"] = admin.id;
                return RedirectToAction("Index", "Admin");
            }
            ViewBag.ErrorMessage = "Invalid Username or password.";
            return View();
        }
        public ActionResult Index()
        {
            if (Session["id"] == null)
            {
                return RedirectToAction("Login", "Admin");
            }
            var id = Session["id"];
            var admin = db.Admins.Find(id);
            Session["id"] = id;
            Session["name"]= admin.name;
            Session["IMG"]= admin.IMG;
            return View(admin);
        }


        public ActionResult Logout()
        {
            Session["id"] = null;
            Session["name"] = null;
            Session["IMG"] = null;
            return RedirectToAction("Index", "Admin");
        }


        public ActionResult Profile()
        {
            var id = Session["id"];
            var admin = db.Admins.Find(id);
            return View(admin);

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Profile(HttpPostedFileBase imageFile)
        {
            var adminId = Session["id"];
            if (adminId == null)
            {
                return RedirectToAction("Login");
            }

            var admin = db.Admins.Find(adminId);
            if (admin == null)
            {
                return HttpNotFound();
            }

            if (imageFile != null && imageFile.ContentLength > 0)
            {
                var fileName = Path.GetFileName(imageFile.FileName);
                var uniqueFileName = Guid.NewGuid().ToString() + "_" + fileName;
                var path = Path.Combine(Server.MapPath("~/img/"), uniqueFileName);

                imageFile.SaveAs(path);

                // Delete the old image file if it exists
                if (!string.IsNullOrEmpty(admin.IMG))
                {
                    var oldImagePath = Path.Combine(Server.MapPath("~/img"), admin.IMG);
                    if (System.IO.File.Exists(oldImagePath))
                    {
                        System.IO.File.Delete(oldImagePath);
                    }
                }

                admin.IMG = uniqueFileName;
                db.Entry(admin).State = EntityState.Modified;
                db.SaveChanges();
            }

            return RedirectToAction("Profile");
        }


        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Admin admin = db.Admins.Find(id);
            if (admin == null)
            {
                return HttpNotFound();
            }
            return View(admin);
        }


        // GET: Users/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Admin admin = db.Admins.Find(id);
            if (admin == null)
            {
                return HttpNotFound();
            }
            return View(admin);
        }

      
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "username,name,email,password,IMG")] Admin admin)
        {
            if (ModelState.IsValid)
            {
                db.Entry(admin).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Profile");
            }
            return View(admin);
        }

        public ActionResult ResetPassword()
        {
            var adminId = Session["id"];
            if (adminId == null)
            {
                return RedirectToAction("Login");
            }
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ResetPassword(string oldPassword, string newPassword, string confirmPassword)
        {
            var adminId = Session["id"];
            if (adminId == null)
            {
                return RedirectToAction("Login");
            }

            var admin = db.Admins.Find(adminId);
            if (admin == null)
            {
                return HttpNotFound();
            }

            if (admin.password != oldPassword)
            {
                ModelState.AddModelError("", "Old password is incorrect.");
                return View();
            }

            if (newPassword != confirmPassword)
            {
                ModelState.AddModelError("", "New password and confirmation password do not match.");
                return View();
            }

            admin.password = newPassword;
            db.Entry(admin).State = EntityState.Modified;
            db.SaveChanges();

            ViewBag.SuccessMessage = "Password has been reset successfully.";
            return View();
        }

        // GET: Admins/Delete/5
        //public ActionResult Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    Admin admin = db.Admins.Find(id);
        //    if (admin == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(admin);
        //}

        //// POST: Admins/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    Admin admin = db.Admins.Find(id);
        //    db.Admins.Remove(admin);
        //    db.SaveChanges();
        //    return RedirectToAction("Index");
        //}
    }

}