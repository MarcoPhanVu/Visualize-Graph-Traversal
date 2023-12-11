using System;
using System.Collections.Generic;
using System.Drawing;
using System.Windows.Forms;

namespace LTDT
{
    public partial class Main : Form
    {
        List<List<int>> Adjacent;
        int Vertices; // so dinh
        GraphicsTools g; // khai bao 1 graphicsTools
        List<Point> lstPointVertices; // danh sach toa do cac dinh
        string FileName;
        public const int PicturePadding = 50; // picture padding
        public Main()
        {
            InitializeComponent();
        }

        private void menuStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
            About frmAbout = new About();
            frmAbout.StartPosition = FormStartPosition.CenterScreen;
            frmAbout.Show(this);
        }

        private void toolStripComboBox1_Click(object sender, EventArgs e)
        {

        }

        private void Main_Load(object sender, EventArgs e)
        {
            // disable button findpath va button save image
            this.btnFindPath_click.Enabled = false;
            this.btnSave_click.Enabled = false;
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {

        }

        private void guna2Button1_Click(object sender, EventArgs e)
        {
            OpenFileDialog ofd = new OpenFileDialog();
            ofd.Filter = "Text Document File(*.txt)|*.txt|All File(*.*)|*.*";

            if (ofd.ShowDialog() == DialogResult.OK)
            {
                try
                {
                    // enable button findpath va button save image
                    this.btnFindPath_click.Enabled = true;
                    this.btnSave_click.Enabled = true;

                    // reset control values
                    this.cboFrom.Items.Clear();
                    this.cboTo.Items.Clear();
                    //
                    Matrix m = new Matrix();
                    //
                    this.FileName = ofd.FileName;
                    this.Adjacent = m.LoadFile(this.FileName, this.lvMatrix, this.cboFrom, this.cboTo);
                    this.cboFrom.SelectedIndex = 0;
                    this.cboTo.SelectedIndex = 1;

                    this.Vertices = m.Vertices;

                    this.g = new GraphicsTools(this.pictureBox1.Width, this.pictureBox1.Height);// khoi tao graphics tool

                    // lay danh sach toa do cac dinh
                    this.lstPointVertices = new Vector2D(this.Vertices, this.pictureBox1.Width - Main.PicturePadding,
                                                this.pictureBox1.Height - Main.PicturePadding).getRandomPoint();
                    // tao bitmap do thi voi danh sach ke va danh sach toa cac dinh

                    this.pictureBox1.Image = this.g.CreateGraphics(this.Adjacent, this.lstPointVertices);

                }
                catch (Exception EX)
                {
                    MessageBox.Show(EX.Message, "Error");

                }
            }
            ofd.Dispose();

        }


        private void menuStrip1_ItemClicked_1(object sender, ToolStripItemClickedEventArgs e)
        {

        }

        private void listView1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void btnExit_click_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void btnFindPath_click_Click(object sender, EventArgs e)
        {
            BFS bfs = new BFS(this.Adjacent);

            int start = this.cboFrom.SelectedIndex;
            int end = this.cboTo.SelectedIndex;
            // reset picGraphics va txtResult
            this.pictureBox1.Image = this.g.Reset(this.Adjacent, this.lstPointVertices);
            this.txtResult.Clear();
            if (start == end)
            {
                MessageBox.Show("Vertices are duplicate. Please choose again!", "Error vertices Selected");
                return;
            }
            List<int> res = bfs.findPathbyBfs(this.Vertices, start, end);

            if (res == null)
            {
                string text = "Can't find any path from {0} to {1}.";
                MessageBox.Show(string.Format(text, start + 1, end + 1), "Find Path");
                return;
            }
            else
            {
                int index;
                this.txtResult.Text = "";
                // reset bit map

                // xuat ket qua ra text box
                for (index = 0; index < res.Count - 1; ++index)
                    this.txtResult.Text += (1 + res[index]).ToString() + " ---> ";
                this.txtResult.Text += (1 + res[index]).ToString();

                // ve duong di len bitmap
                this.pictureBox1.Image = this.g.DrawPath(res, this.lstPointVertices);
            }

        }

        private void comboBox2_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void btnSave_click_Click(object sender, EventArgs e)
        {
            SaveFileDialog saveImgDialog = new SaveFileDialog();
            saveImgDialog.DefaultExt = "png";
            saveImgDialog.Filter = "Bitmap Image (*.png)|*.png|All File (*.*)|*.*";
            saveImgDialog.AddExtension = true;
            saveImgDialog.RestoreDirectory = true;
            saveImgDialog.Title = "Save graph to image";
            string initFileName = System.IO.Path.GetFileNameWithoutExtension(this.FileName);
            saveImgDialog.FileName = initFileName;
            try
            {
                if (saveImgDialog.ShowDialog() == DialogResult.OK)
                {
                    string imgPath = saveImgDialog.FileName;

                    if (imgPath != null)
                    {
                        if (this.pictureBox1.Image != null)
                        {
                            this.pictureBox1.Image.Save(imgPath, System.Drawing.Imaging.ImageFormat.Png);
                        }
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
            saveImgDialog.Dispose();
        }
    }
}
