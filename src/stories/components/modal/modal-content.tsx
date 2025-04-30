interface ModalContentProps {
    className?: string;
    onClick?: () => void;
    handleCloseModal?: () => void;
}

const ModalContent = ({
    className = "",
    onClick,
    handleCloseModal,
}: ModalContentProps) => {

  return (
    <>
      <h2 className="pt-2">Heading 2</h2>
      <p>Paragraph 1</p>

      <input
        value="email"
        placeholder="Email"
        type="email"
      />
      <input
        value="password"
        placeholder="********"
        type="password"
      />

      <button>
        <p>Paragraph 2</p>
      </button>

      <hr />

      <div className="register-content">
        <p>
          Paragraph 3
        </p>
        <button>
          <p>Paragraph 4</p>
        </button>
      </div>
    </>
  );
};

export default ModalContent;
