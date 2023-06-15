import Head from "next/head";
import { useRouter } from "next/router";
import useClientSideTime from "@/hooks/useClientSideTime";

/**
  Calculates the time difference between the server time and client time.
  @param {Date} serverTime - The server time.
  @param {Date} clientTime - The client time.
  @returns {string} The time difference in the format "{days} days, {hours} hours, {minutes} minutes, {seconds} seconds".
*/

const getdateTostring = (now:Date)=>{
  return `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
}

const calculateTimeDifference = (server: Date, client: Date) => {
  const stringServer = getdateTostring(server)
  const stringClient = getdateTostring(client)
  const sdate = stringServer.split(" ")[0].split("-").map((date)=>(parseInt(date)));
  const shours = stringServer.split(" ")[1].split(":").map((hours)=>(parseInt(hours)));
  const chours = stringClient.split(" ")[1].split(":").map((hours)=>(parseInt(hours)));
  const cdate = stringClient.split(" ")[0].split("-").map((date)=>(parseInt(date)));
  return `${Math.abs(sdate[0]-cdate[0])}-${Math.abs(sdate[1]-cdate[1])}-${Math.abs(sdate[2]-cdate[2])} ${Math.abs(shours[0]-chours[0])}:${Math.abs(shours[1]-chours[1])}`
};

export default function Home() {
  const router = useRouter();
  const moveToTaskManager = () => {
    router.push("/tasks");
  }
  const server = new Date();
 
  return (
    <>
      <Head>
        <title>Web 2 - Exam TD</title>
        <meta name="description" content="Just an exam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>The easiest exam you will ever find</h1>
        <div>
          {/* Display here the server time (DD-MM-AAAA HH:mm)*/}
          <p>
            Server time:{" "}
            <span className="serverTime">{getdateTostring(server)}</span>
          </p>

          {/* Display here the time difference between the server side and the client side */}
          <p>
            Time diff:{" "}
            <span className="serverTime">{calculateTimeDifference(server,useClientSideTime())}</span>
          </p>
        </div>

        <div>
          <button onClick={moveToTaskManager}>Go to task manager</button>
        </div>
      </main>
    </>
  );
}
