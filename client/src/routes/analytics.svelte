<script>
  import { LayerCake, Svg } from "layercake";
  import { scaleLinear } from "d3-scale";
  import { onMount } from "svelte";

  import Radar from "../components/Radar.svelte";
  import AxisRadial from "../components/AxisRadial.svelte";

  import data from "../components/radarScores.js";

  let analyticMessage =
    "This is the type of poop you most enjoy based on your swipes.";

  const seriesKey = "name";
  const xKey = [
    "Yellow",
    "Green",
    "Brown",
    "Black",
    "Smooth",
    "Rough",
    "Bright",
    "Dark",
    "Embedded Objects",
  ];

  // this needs to be changed to fetch from firebase instead of the test file
  const seriesNames = Object.keys(data[0]).filter((d) => d !== seriesKey);

  let total = 0;

  console.log(data);
  var poops = seriesNames;
  onMount(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        poops = db
          .collection("users")
          .doc(user.uid)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              var person = doc.data();

              var swipes = Object.keys(person.swipes);
              // converts the value from string to Integer for all keys
              swipes.forEach((str) => {
                person.swipes[str] = parseInt(person.swipes[str]);
              });
              console.log(person.swipes);
              console.log(data[0]);
              data[0] = person.swipes;
            } else {
              console.log("no doc, using default");
              analyticMessage =
                "Once you have made swipes, your analytics graph will show up.";
            }
          });
      } else {
        // User not logged in or has just logged out.
        console.log("NO USERRRRR");
      }
    });
    data.forEach((d) => {
      seriesNames.forEach((name) => {
        d[name] = +d[name];
        total += d[name];
      });
    });
    console.log(total);
    data.forEach((d) => {
      seriesNames.forEach((name) => {
        d[name] = (d[name] / total) * 35; // prevents chart from getting really big or small
        if (total <= 36) {
          d[name] += 0;
        }
      });
      console.log(d);
    });
  });

  console.log(data);
</script>

<div class="container mx-auto mt-24">
  <div class="mx-10 md:grid sm:grid-cols-1 lg:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 lg:px-2 sm:px-16">
        <h2 class="text-2xl font-bold leading-6 text-gray-900">Analysis</h2>
        <p class="text-md text-gray-600 mt-5">
          {analyticMessage}
        </p>
      </div>
    </div>
    <div class="mt-5 pt-8 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <!-- <div class="shadow sm:rounded-md sm:overflow-hidden"> -->
        <!-- <div class="px-4 py-5 bg-white space-y-6 sm:p-6 "> -->
        <div class="grid grid-cols-1 gap-6 ">
          <div class="col-span-1 sm:col-span-1">
            <!-- <div class="mt-1 flex rounded-md shadow-sm"> -->
            <div class="chart-container">
              <LayerCake
                padding={{ top: 30, right: 30, bottom: 30, left: 30 }}
                x={xKey}
                xDomain={[0, 10]}
                xRange={({ height }) => [0, (height * (30 / total)) / 2]}
                {data}
              >
                <Svg>
                  <AxisRadial />
                  <Radar />
                </Svg>
              </LayerCake>
            </div>
            <style>
              .chart-container {
                position: relative;
                width: 100%;
                height: 12rem;
              }
              @media (min-width: 48em) {
                .chart-container {
                  position: relative;
                  width: 100%;
                  height: 33vw;
                }
              }
            </style><!-- </div> -->
          </div>
        </div>
        <!-- </div> -->
        <!-- </div> -->
      </form>
    </div>
  </div>
  <script
    src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"></script><script
    src="https://www.gstatic.com/firebasejs/8.2.3/firebase-auth.js"></script><script
    src="https://www.gstatic.com/firebasejs/8.2.3/firebase-firestore.js"></script><script>
    var firebaseConfig = {
      apiKey: " AIzaSyCPBQOoHU38VXcW7LFSoGT-IrrHwxiil48 ",
      projectId: "sbhacks2021-301902",
      authDomain: "sbhacks2021-301902.firebaseapp.com",
      databaseURL: "https://sbhacks2021-301902.firebaseio.com",
      storageBucket: "sbhacks2021-301902.appspot.com",
    };
    firebase.initializeApp(firebaseConfig);
    // var db = firebase.firestore();
  </script>
</div>
