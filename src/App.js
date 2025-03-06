import React, { useState } from "react";

const quotes = [ 
  { sanskrit: "योगः कर्मसु कौशलम्", hindi: "कर्म में कुशलता ही योग है।", source: "भगवद गीता 2.50" },
  { sanskrit: "श्रद्धावान् लभते ज्ञानम्", hindi: "श्रद्धावान को ज्ञान की प्राप्ति होती है।", source: "भगवद गीता 4.39" },
  { sanskrit: "न जायते म्रियते वा कदाचित्", hindi: "आत्मा न जन्म लेती है, न मरती है।", source: "भगवद गीता 2.20" },
  { sanskrit: "कर्मण्येवाधिकारस्ते", hindi: "कर्म करने का ही अधिकार है, फल की चिंता मत कर।", source: "भगवद गीता 2.47" },
  { sanskrit: "उद्धरेदात्मनात्मानम्", hindi: "मनुष्य को स्वयं अपना उद्धार करना चाहिए।", source: "भगवद गीता 6.5" },
  { sanskrit: "माता पृथिव्या पुत्रोऽहम्", hindi: "मैं पृथ्वी माता का पुत्र हूँ।", source: "अथर्ववेद 12.1.12" },
  { sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते", hindi: "ज्ञान के समान पवित्र कुछ भी नहीं।", source: "भगवद गीता 4.38" },
  { sanskrit: "सर्वं ज्ञानं मयि स्थितम्", hindi: "संपूर्ण ज्ञान मुझमें स्थित है।", source: "उपनिषद" },
  { sanskrit: "आत्मनः प्रतिकूलानि परेषां न समाचरेत्", hindi: "जो अपने लिए अच्छा न लगे, वह दूसरों के साथ मत करो।", source: "महाभारत" },
  { sanskrit: "विद्यां चाविद्यां च यस्तद्वेदोभयं सह", hindi: "जो विद्या और अविद्या दोनों को जानता है, वही सत्य को जान पाता है।", source: "ईशोपनिषद 11" },
  { sanskrit: "नरकायैव कल्पते", hindi: "अन्याय करने वाला नरक में जाता है।", source: "मनुस्मृति" },
  { sanskrit: "सर्वेऽत्र सुखिनः सन्तु", hindi: "सभी सुखी रहें।", source: "ऋग्वेद 10.191.4" },
  { sanskrit: "असतो मा सद्गमय", hindi: "असत्य से सत्य की ओर ले चलो।", source: "बृहदारण्यक उपनिषद 1.3.28" },
  { sanskrit: "तमसो मा ज्योतिर्गमय", hindi: "अंधकार से प्रकाश की ओर ले चलो।", source: "बृहदारण्यक उपनिषद 1.3.28" },
  { sanskrit: "मृत्योर् मा अमृतं गमय", hindi: "मृत्यु से अमरता की ओर ले चलो।", source: "बृहदारण्यक उपनिषद 1.3.28" },
  { sanskrit: "सर्वं खल्विदं ब्रह्म", hindi: "सब कुछ ब्रह्म ही है।", source: "छांदोग्य उपनिषद 3.14.1" },
  { sanskrit: "मन्मना भव मद्भक्तो", hindi: "मेरा स्मरण कर, मेरा भक्त बन।", source: "भगवद गीता 9.34" },
  { sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज", hindi: "सभी धर्मों को त्यागकर मेरी शरण में आ जाओ।", source: "भगवद गीता 18.66" },
  { sanskrit: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्", hindi: "कोई भी व्यक्ति एक क्षण भी बिना कर्म किए नहीं रह सकता।", source: "भगवद गीता 3.5" },
  { sanskrit: "धर्मो रक्षति रक्षितः", hindi: "जो धर्म की रक्षा करता है, धर्म उसकी रक्षा करता है।", source: "मनुस्मृति 8.15" },
  { sanskrit: "सत्यमेव जयते", hindi: "सत्य की ही विजय होती है।", source: "मुण्डकोपनिषद 3.1.6" },
  { sanskrit: "विद्या ददाति विनयं", hindi: "विद्या विनय देती है।", source: "हितोपदेश" },
  { sanskrit: "अहिंसा परमो धर्मः", hindi: "अहिंसा सबसे बड़ा धर्म है।", source: "महाभारत 18.113.8" }
];

const VedicQuotesApp = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-xl bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-8"> दैनिक विचार </h1>
        <p className="text-lg font-semibold mb-3">{quote.sanskrit}</p>
        <p className="text-gray-700 italic mb-2">{quote.hindi}</p>
        <p className="text-sm text-gray-500 mb-4">स्रोत: {quote.source}</p>
        <button 
          onClick={getNewQuote} 
          className="bg-red-700 text-white px-5 py-3 rounded hover:bg-oragne-900 transition"
        >
          नया उद्धरण देखें
        </button>
      </div>
    </div>
  );
