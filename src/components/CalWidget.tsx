import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalWidget = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"questions-and-answers"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  
  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-card border border-border rounded-lg shadow-lg z-50">
      <Cal 
        namespace="questions-and-answers"
        calLink="ritanunes/questions-and-answers"
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view"}}
      />
    </div>
  );
};

export default CalWidget;