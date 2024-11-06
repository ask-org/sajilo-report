import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { TContentItem, Tsection } from "../../../../types/create-document";
import { styles } from "./StyleSheet";

type PDFChapterProps = {
  chapter: Tsection;
  index: number;
};

const renderContent = (content: TContentItem) => {
  switch (content.type) {
    case "heading":
      return <Text style={styles.titleText}>{content.value}</Text>;
    case "paragraph":
      return <Text style={styles.paragraph}>{content.value}</Text>;
    default:
      return null;
  }
};

const PDFChapter = ({ chapter, index }: PDFChapterProps) => {
  return (
    <React.Fragment>
      <View key={index} style={styles.section}>
        {/* Section Title with numbering */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Chapter {index + 1}:{" "}
            {chapter.content[0].type === "heading"
              ? (chapter.content[0].value as string)
              : "No Title Found"}
          </Text>
        </View>
        {chapter.content.map((content, contentIndex) => (
          <React.Fragment key={contentIndex}>
            {renderContent(content)}
          </React.Fragment>
        ))}
        {/* Subsections */}
        {chapter.subsection &&
          chapter.subsection.map((subsec, subIndex) => (
            <View key={subIndex} style={styles.section}>
              {/* Subsection Title with numbering */}
              <View style={styles.subheadingContainer}>
                <Text style={styles.subheadingNumber}>
                  {index + 1}.{subIndex + 1}
                </Text>
                <Text style={styles.subheadingText}>{subsec.title}</Text>
              </View>
              {subsec.content.map((subContent, subContentIndex) => (
                <Text key={subContentIndex} style={styles.paragraph}>
                  {subContent.value}
                </Text>
              ))}
            </View>
          ))}
      </View>
      ))
    </React.Fragment>
  );
};

export default PDFChapter;
