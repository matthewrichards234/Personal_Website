import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const ResumeDocument = () => {
  return (
    <Document>
      <Page>
        <View>
          <Text>MATTHEW RICHARDS</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({});

export default ResumeDocument;
