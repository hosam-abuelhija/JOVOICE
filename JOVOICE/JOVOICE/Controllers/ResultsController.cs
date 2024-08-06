using JOVOICE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JOVOICE.Controllers
{
    public class ResultsController : Controller
    {
        private ElectionEntities db = new ElectionEntities();

        // GET: Results
        public ActionResult Index()
        {
            TempData["partyPercent"] = partyPercentage();
            TempData["localPercentIrbid1"] = localPercentage("اربد الاولى");
            TempData["localPercentIrbid2"] = localPercentage("اربد الثانية");
            TempData["localPercentMafraq"] = localPercentage("المفرق");


            return View();
        }



        public ActionResult detailedResults(string id)
        {

            ViewBag.currentID = id;

            //TempData["resultsList"] = localListsAndCanditates(id).ToList();

            return View(localListsAndCanditates(id));
        }




        //public ActionResult womanSeat()
        //{

        //    return View();
        //}
        //[HttpPost]
        public ActionResult womanSeat(string id)
        {
            var x = localWomanSeat(id).ToList();
            return View(x);
        }



        public ActionResult christianSeat(string id)
        {
            var x = localChristianSeat(id).ToList();

            return View(x);
        }




        public ActionResult staticResults()
        { return View(); }





        public ActionResult partyResults()
        {
            return View(partyListsAndCanditates().ToList());
        }


        /* ///////////////////////////////////////////////////////////////////////// */
        /* ///////////////////////////////////////////////////////////////////////// */
        /* ///////////////////////////////////////////////////////////////////////// */



        public long usersNumber()
        {
            long countUsers = 0;

            var allUsers = db.Users.ToList();

            foreach (var row in allUsers)
            {
                countUsers++;
            }
            return countUsers;
        }


        public double localPercentage(string d)
        {
            double percentage = (double)localVotersCount(d) / (double)usersNumber();


            return (Math.Round(percentage, 2)) * 100;
        }


        public double partyPercentage()
        {
            double percentage = (double)partyVotersCount() / (double)usersNumber();


            return (Math.Round(percentage, 2)) * 100;
        }


        /* ///////////////////////////////////////////////////////////////////////// */
        /* ///////////////////////////////////////////////////////////////////////// */
        /* ///////////////////////////////////////////////////////////////////////// */



        public long localVotersCount(string d)
        {
            long localVotes = 0;

            var allUsers = db.Users.ToList();

            foreach (var row in allUsers)
            {
                if (row.electionarea == d)
                {
                    localVotes += Convert.ToInt64(row.voteLocal);
                }
            }

            return localVotes;
        }


        public double localThreshold(string d)
        {
            double localThreshold = localVotersCount(d) * 0.07;
            return localThreshold;
        }

        public List<string> localListsAboveThreshold(string d)
        {
            List<string> thresholdLocal = new List<string>();

            var allLocalLists = db.LocalLists.ToList();

            foreach (var row in allLocalLists)
            {
                if (row.electionDistrict == d && row.votes_counter > localThreshold(d))
                {
                    string addedList = $"{row.id}, {row.listname}, {row.electionDistrict}, {row.votes_counter}";

                    thresholdLocal.Add(addedList);
                }
            }

            return thresholdLocal;

        }


        public long localWinningListsVotesSum(string d)
        {
            long winningListsVotesSum = 0;

            var winningLists = localListsAboveThreshold(d).ToList();

            foreach (var row in winningLists)
            {
                var winningListsRows = String.Join(", ", row);

                string[] listsArray = winningListsRows.Split(',');

                long listVotes = long.Parse(listsArray.Last());

                winningListsVotesSum += listVotes;

            }

            return winningListsVotesSum;

        }


        public List<string> localListsSeats(string d)
        {
            long seatsAvailable = 0;

            switch (d)
            {
                case "اربد الاولى":
                    seatsAvailable = 7;
                    break;
                case "اربد الثانية":
                    seatsAvailable = 5;
                    break;
                case "المفرق":
                    seatsAvailable = 3;
                    break;
            }

            var Lists = localListsAboveThreshold(d).ToList();

            var winningLists = new List<string>();

            foreach (var row in Lists)
            {
                string listRow = row;


                var winningListsRows = String.Join(", ", row);

                string[] listsArray = winningListsRows.Split(',');

                long listVotes = long.Parse(listsArray.Last());


                long sum = localWinningListsVotesSum(d);


                decimal percentage = (decimal)listVotes / (decimal)sum;

                decimal seatsWon = percentage * (decimal)seatsAvailable;


                listRow += $", {Math.Round(seatsWon)}";

                winningLists.Add(listRow);
            }

            return winningLists;
        }


        public List<string> localListsCanditates(string d)
        {
            var localCan = localListsAboveThreshold(d).ToList();
            var localCanditates = db.LocalCandidates.ToList();

            List<string> localWinningCanditates = new List<string>();

            foreach (var row in localCan)
            {
                string listRow = row;

                var winningListsRows = String.Join(", ", row);

                string[] listsArray = winningListsRows.Split(',');

                string listName = listsArray[1].Trim();

                foreach (var can in localCanditates)
                {
                    if (can.electionarea == d && can.listname == listName)
                    {
                        string canditateNameAndId = $"{can.id}, {can.name}, {can.listname}, {can.type_of_chair}, {can.votes_counter}";

                        localWinningCanditates.Add(canditateNameAndId);
                    }

                }

            }
            localWinningCanditates = localWinningCanditates.OrderByDescending(can => long.Parse(can.Split(',').Last().Trim())).ToList();

            return localWinningCanditates;
        }


        public List<string> localListsAndCanditates(string d)
        {
            var localListsWinners = localListsSeats(d).ToList();
            var localCanditates = localListsCanditates(d).ToList();

            List<string> localWinners = new List<string>();

            foreach (var row in localListsWinners)
            {
                string listRow = row;

                var winningListsRows = String.Join(", ", row);

                string[] listsArray = winningListsRows.Split(',');

                long listsSeats = long.Parse(listsArray.Last());

                string listName = listsArray[1];

                long seatsCount = 0;

                foreach (var can in localCanditates)
                {
                    string canRow = can;

                    var canRowsList = string.Join(", ", canRow);
                    string[] canArray = canRowsList.Split(',');

                    if (canArray[2] == listName && canArray[3].Trim() == "عام")
                    {
                        string canditateNameAndId = $"{listsArray[0]}, {listsArray[1]}, {listsArray[3]}, {d}, {canArray[0]}, {canArray[1]}, {canArray[3]}, {canArray[4]}";

                        localWinners.Add(canditateNameAndId);

                        seatsCount++;

                        if (seatsCount == listsSeats)
                        {
                            break;
                        }
                    }

                }

            }
            return localWinners;
        }


        public List<string> localWomanSeat(string d)
        {
            var localCanditate = localListsCanditates(d).ToList();

            List<string> localWomen = new List<string>();

            List<string> winningWoman = new List<string>();

            foreach (var row in localCanditate)
            {
                string canRow = row;
                var canLists = string.Join(",", canRow);
                string[] canArray = canLists.Split(',');

                if (canArray[3].Trim() == "امرأة")
                {
                    string womanCan = $"{canArray[0]}, {canArray[1]}, {canArray[2]}, {d}, {canArray[4]}";
                    localWomen.Add(womanCan);
                }

            }

            localWomen = localWomen.OrderByDescending(can => long.Parse(can.Split(',').Last().Trim())).ToList();

            winningWoman.Add(localWomen[0]);

            return winningWoman;
        }


        public List<string> localChristianSeat(string d)
        {
            var localCanditate = localListsCanditates(d).ToList();

            List<string> localChristian = new List<string>();

            List<string> winningChristian = new List<string>();

            foreach (var row in localCanditate)
            {
                string canRow = row;
                var canLists = string.Join(",", canRow);
                string[] canArray = canLists.Split(',');

                if (canArray[3].Trim() == "مسيحي")
                {
                    string chrisCan = $"{canArray[0]}, {canArray[1]}, {canArray[2]}, {d}, {canArray[4]}";
                    localChristian.Add(chrisCan);
                }

            }

            localChristian = localChristian.OrderByDescending(can => long.Parse(can.Split(',').Last().Trim())).ToList();

            winningChristian.Add(localChristian[0]);


            return winningChristian;
        }


        /* ///////////////////////////////////////////////////////////////////////// */
        /* ///////////////////////////////////////////////////////////////////////// */
        /* ///////////////////////////////////////////////////////////////////////// */



        public long partyVotersCount()
        {
            long partyVotes = 0;

            var allUsers = db.Users.ToList();

            foreach (var row in allUsers)
            {
                partyVotes += Convert.ToInt64(row.voteParty);
            }

            return partyVotes;
        }


        public double partyThreshold()
        {
            double partyThreshold = partyVotersCount() * 0.025;
            return partyThreshold;
        }


        public List<string> partyListsAboveThreshold()
        {
            List<string> thresholdParty = new List<string>();

            var allPartyLists = db.PartyLists.ToList();

            foreach (var row in allPartyLists)
            {
                if (row.votes_counter > partyThreshold())
                {
                    string addedList = $"{row.id}, {row.listname}, {row.electionDistrict}, {row.votes_counter}";

                    thresholdParty.Add(addedList);
                }
            }

            return thresholdParty;
        }


        public long partyWinningListsVotesSum()
        {
            long winningListsVotesSum = 0;

            var winningLists = partyListsAboveThreshold().ToList();

            foreach (var row in winningLists)
            {
                var winningListsRows = String.Join(", ", row);

                string[] listsArray = winningListsRows.Split(',');

                long listVotes = long.Parse(listsArray.Last());

                winningListsVotesSum += listVotes;

            }

            return winningListsVotesSum;

        }


        public List<string> partyListsSeats()
        {
            var Lists = partyListsAboveThreshold().ToList();

            var winningLists = new List<string>();

            foreach (var row in Lists)
            {
                string listRow = row;


                var winningListsRows = String.Join(", ", row);

                string[] listsArray = winningListsRows.Split(',');

                long listVotes = long.Parse(listsArray.Last());


                long sum = partyWinningListsVotesSum();


                decimal percentage = (decimal)listVotes / (decimal)sum;

                decimal seatsWon = percentage * (decimal)41;


                listRow += $", {Math.Round(seatsWon)}";

                winningLists.Add(listRow);
            }

            return winningLists;
        }


        public List<string> partyListsCanditates()
        {
            var partyCan = partyListsAboveThreshold().ToList();
            var partyCanditates = db.PartyCandidates.ToList();

            List<string> partyWinningCanditates = new List<string>();

            foreach (var row in partyCan)
            {
                string listRow = row;

                var winningListsRows = String.Join(", ", row);

                string[] listsArray = winningListsRows.Split(',');

                string listName = listsArray[1].Trim();

                foreach (var can in partyCanditates)
                {
                    if (can.partyname == listName)
                    {
                        string canditateNameAndId = $"{can.id}, {can.candidatename}, {can.partyname}, {can.ordercandidate}";

                        partyWinningCanditates.Add(canditateNameAndId);
                    }

                }

            }
            partyWinningCanditates = partyWinningCanditates.OrderBy(can => long.Parse(can.Split(',').Last().Trim())).ToList();

            return partyWinningCanditates;
        }


        public List<string> partyListsAndCanditates()
        {
            var partyListsWinners = partyListsSeats().ToList();
            var partyCanditates = partyListsCanditates().ToList();

            List<string> partyWinners = new List<string>();

            foreach (var row in partyListsWinners)
            {
                string listRow = row;

                var winningListsRows = String.Join(", ", row);

                string[] listsArray = winningListsRows.Split(',');

                long listsSeats = long.Parse(listsArray.Last());

                string listName = listsArray[1];

                long seatsCount = 0;

                foreach (var can in partyCanditates)
                {
                    string canRow = can;

                    var canRowsList = string.Join(", ", canRow);
                    string[] canArray = canRowsList.Split(',');

                    if (canArray[2] == listName)
                    {
                        string canditateNameAndId = $"{listsArray[0]}, {listsArray[1]}, {listsArray[2]}, {listsArray[3]}, {canArray[0]}, {canArray[1]}";

                        partyWinners.Add(canditateNameAndId);

                        seatsCount++;

                        if (seatsCount == listsSeats)
                        {
                            break;
                        }
                    }

                }

            }
            return partyWinners;
        }


    }
}