// Dette er Dalai Solutions AS sin eiendom, på leie til O-ringen. Bruk utover avtale er ikke tillat.    
let inputPlaceholder = " ";
let widgetDescription = " ";
let widgetStylesheet = "";
let browserUrl = window.location.href;
let browser_url = window.location.href;


 if (browserUrl.includes('/en')) {
widgetDescription = "I'm pretty smart, but I need a couple of seconds to think🏃 I'm still learning, so I might make small mistakes.";
inputPlaceholder = "Message...";
widgetStylesheet = "https://kristoman-rikardo.github.io/buttonlabels/en.css";
} else if (browserUrl.includes('/se')) {
widgetDescription = "Jag är ganska smart, men behöver ett par sekunder för att tänka efter🏃 Jag är fortfarande under utbildning och kan därför göra små misstag.";
inputPlaceholder = "Skriv meddelande...";
widgetStylesheet = "https://kristoman-rikardo.github.io/buttonlabels/se.css";
} else {
widgetDescription = "Jag är en smart löpare🏃 Jag är fortfarande under utbildning och kan därför göra små misstag.";
inputPlaceholder = "Skriv meddelande...";
widgetStylesheet = "https://kristoman-rikardo.github.io/buttonlabels/se.css";
}

(function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '68429c48dc7df8feb5cb5e05' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          assistant: {
             stylesheet: widgetStylesheet,
             banner: {
               description: widgetDescription,
                     },
             inputPlaceholder: inputPlaceholder
                   },
         launch: {
            event: { type: "launch", payload: { browser_url: window.location.href } }
      }
        });
      };
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
      v.type = "text/javascript"; 
      s.parentNode.insertBefore(v, s);
  })(document, 'script');
