<script>
  import { LayerCake, Svg } from "layercake";
  import { scaleLinear } from "d3-scale";

  import Radar from "../components/Radar.svelte";
  import AxisRadial from "../components/AxisRadial.svelte";

  import data from "../components/radarScores.js";

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

  const seriesNames = Object.keys(data[0]).filter((d) => d !== seriesKey);
  var total = 0;
  data.forEach((d) => {
    seriesNames.forEach((name) => {
      d[name] = +d[name];
      total += d[name];
    });
  });
  data.forEach((d) => {
    seriesNames.forEach((name) => {
      d[name] = (d[name] / total) * 35; // prevents chart from getting really big or small
      if (d[name] === 0) {
        console.log("zero");
      }
    });
  });
  console.log(total);
</script>

<div class="container mx-auto mt-24">
  <div class="mx-10 md:grid sm:grid-cols-1 lg:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 lg:px-2 sm:px-16">
        <h2 class="text-2xl font-bold leading-6 text-gray-900">Analysis</h2>
        <p class="text-md text-gray-600 mt-5">
          This is the type of poop you most enjoy based on your swipes.
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
                xRange={({ height }) => [0, height / 2]}
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
</div>
