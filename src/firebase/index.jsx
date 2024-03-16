import { doc, setDoc } from "firebase/firestore";
import Utils from "../utils";
import { useEffect, useState } from "react";

export const useSendFeedback = () => {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", content: "" });

  const submit = (form) => {
    setForm(form);
    setStatus("loading");
  };

  useEffect(() => {
    if (form.name && form.email && form.content) {
      const id = Utils.Str.uid();
      const path = "feedbacks";
      const docRef = doc(Utils.Firebase.firestore, path, id);
      setDoc(docRef, form)
        .then(() => {
          Utils.Common.delay(2).then(() => {
            setStatus("success");
          });
        })
        .catch((error) => {
          console.error(error);
          setStatus("error");
        });
    }
  }, [form]);

  return { status, submit };
};
