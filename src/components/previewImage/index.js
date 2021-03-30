function PreviewImage(props) {
  const { avatarUrl } = props;

  return (
    <div className="preview" style={{ width: "300px" }}>
      <img
        className="preview-image"
        src={avatarUrl}
        loading="lazy"
        width="300px"
      />
    </div>
  );
}

export default PreviewImage;
