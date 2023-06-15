import Head from "next/head";
import { useRouter } from "next/router";
import useClientSideTime from "@/hooks/useClientSideTime";

/**
  Calculates the time difference between the server time and client time.
  @param {Date} serverTime - The server time.
  @param {Date} clientTime - The client time.
  @returns {string} The time difference in the format "{days} days, {hours} hours, {minutes} minutes, {seconds} seconds".
*/
const calculateTimeDifference = (server: Date, client: Date) => {};


export default function Home() {
  const router = useRouter();
  const moveToTaskManager = () => {
    router.push("/tasks");
  }
  const now = new Date();
  const getServerDate = ()=>{
    return `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
  }
  const calc = (server:string, client:string)=>{
    const sdate = server.split(" ")[0].split("-").map((date)=>(parseInt(date)));
    const shours = server.split(" ")[1].split(":").map((hours)=>(parseInt(hours)));
    const chours = client.split(" ")[1].split(":").map((hours)=>(parseInt(hours)));
    const cdate = client.split(" ")[0].split("-").map((date)=>(parseInt(date)));
    return `${sdate[0]-cdate[0]}-${sdate[1]-cdate[1]}-${sdate[2]-cdate[2]} ${sdate[0]-cdate[0]}:${sdate[1]-cdate[1]}`
    
  }
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
            <span className="serverTime">{getServerDate()}</span>
          </p>

          {/* Display here the time difference between the server side and the client side */}
          <p>
            Time diff:{" "}
            <span className="serverTime">{calc(getServerDate(),useClientSideTime())}</span>
          </p>
        </div>

        <div>
          <button onClick={moveToTaskManager}>Go to task manager</button>
        </div>
      </main>
    </>
  );
}
