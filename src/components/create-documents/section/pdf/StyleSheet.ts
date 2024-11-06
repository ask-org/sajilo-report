import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  section: {
    marginBottom: 24,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    borderBottomStyle: "solid",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop: 12,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subheadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8,
  },
  subheadingNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginRight: 5,
  },
  subheadingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 1.6,
    color: "#444",
  },
  listContainer: {
    paddingLeft: 16,
  },
  listItem: {
    fontSize: 12,
    lineHeight: 1.4,
    marginBottom: 4,
  },
});
