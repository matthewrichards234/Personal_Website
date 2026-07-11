import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const ResumeDocument = () => {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <View style={styles.name}>
          <Text>MATTHEW RICHARDS</Text>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Inter",
  src: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
});

const styles = StyleSheet.create({
  page: {},
  name: {
    fontSize: 18,
    fontWeight: 700,
  },
  contactInfo: {},
  about: {},
  technicalSkills: {},
  relevantCoursework: {},
  projects: {},
  experience: {},
  education: {},
});

export default ResumeDocument;
