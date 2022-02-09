import React, { Component } from "react";
import { WebView } from "react-native-webview";

export default function SongDetails({ navigation, route }) {
  const params = route.params;
  return (
    <WebView
      source={{
        uri: params.externalUrl,
      }}
    />
  );
}
