namespace LTDT
{
    partial class Main
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.txtResult = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.cboFrom = new System.Windows.Forms.ComboBox();
            this.cboTo = new System.Windows.Forms.ComboBox();
            this.btnFindPath_click = new Guna.UI2.WinForms.Guna2Button();
            this.btnExit_click = new Guna.UI2.WinForms.Guna2Button();
            this.btnSave_click = new Guna.UI2.WinForms.Guna2Button();
            this.btnOpen_click = new Guna.UI2.WinForms.Guna2Button();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.lvMatrix = new System.Windows.Forms.ListView();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.groupBox3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(192)))));
            this.groupBox1.Controls.Add(this.lvMatrix);
            this.groupBox1.Controls.Add(this.txtResult);
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Controls.Add(this.label1);
            this.groupBox1.Location = new System.Drawing.Point(12, 36);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(534, 368);
            this.groupBox1.TabIndex = 1;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "View";
            // 
            // txtResult
            // 
            this.txtResult.Location = new System.Drawing.Point(84, 274);
            this.txtResult.Multiline = true;
            this.txtResult.Name = "txtResult";
            this.txtResult.Size = new System.Drawing.Size(392, 80);
            this.txtResult.TabIndex = 2;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(19, 274);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(55, 20);
            this.label2.TabIndex = 1;
            this.label2.Text = "Result";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(23, 44);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(51, 20);
            this.label1.TabIndex = 0;
            this.label1.Text = "Matrix";
            // 
            // groupBox2
            // 
            this.groupBox2.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(192)))));
            this.groupBox2.Controls.Add(this.label4);
            this.groupBox2.Controls.Add(this.label3);
            this.groupBox2.Controls.Add(this.cboFrom);
            this.groupBox2.Controls.Add(this.cboTo);
            this.groupBox2.Controls.Add(this.btnFindPath_click);
            this.groupBox2.Controls.Add(this.btnExit_click);
            this.groupBox2.Controls.Add(this.btnSave_click);
            this.groupBox2.Controls.Add(this.btnOpen_click);
            this.groupBox2.Location = new System.Drawing.Point(12, 425);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(534, 212);
            this.groupBox2.TabIndex = 2;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Tools";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(93, 70);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(27, 20);
            this.label4.TabIndex = 7;
            this.label4.Text = "To";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(93, 11);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(46, 20);
            this.label3.TabIndex = 6;
            this.label3.Text = "From";
            // 
            // cboFrom
            // 
            this.cboFrom.FormattingEnabled = true;
            this.cboFrom.Location = new System.Drawing.Point(97, 41);
            this.cboFrom.Name = "cboFrom";
            this.cboFrom.Size = new System.Drawing.Size(192, 28);
            this.cboFrom.TabIndex = 5;
            this.cboFrom.SelectedIndexChanged += new System.EventHandler(this.comboBox2_SelectedIndexChanged);
            // 
            // cboTo
            // 
            this.cboTo.FormattingEnabled = true;
            this.cboTo.Location = new System.Drawing.Point(97, 93);
            this.cboTo.Name = "cboTo";
            this.cboTo.Size = new System.Drawing.Size(192, 28);
            this.cboTo.TabIndex = 4;
            // 
            // btnFindPath_click
            // 
            this.btnFindPath_click.BorderRadius = 18;
            this.btnFindPath_click.BorderThickness = 1;
            this.btnFindPath_click.DisabledState.BorderColor = System.Drawing.Color.DarkGray;
            this.btnFindPath_click.DisabledState.CustomBorderColor = System.Drawing.Color.DarkGray;
            this.btnFindPath_click.DisabledState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(169)))), ((int)(((byte)(169)))), ((int)(((byte)(169)))));
            this.btnFindPath_click.DisabledState.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(141)))), ((int)(((byte)(141)))), ((int)(((byte)(141)))));
            this.btnFindPath_click.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(255)))));
            this.btnFindPath_click.Font = new System.Drawing.Font("Segoe UI", 9F);
            this.btnFindPath_click.ForeColor = System.Drawing.Color.Black;
            this.btnFindPath_click.Location = new System.Drawing.Point(97, 135);
            this.btnFindPath_click.Name = "btnFindPath_click";
            this.btnFindPath_click.Size = new System.Drawing.Size(192, 45);
            this.btnFindPath_click.TabIndex = 3;
            this.btnFindPath_click.Text = "Find Path";
            this.btnFindPath_click.Click += new System.EventHandler(this.btnFindPath_click_Click);
            // 
            // btnExit_click
            // 
            this.btnExit_click.BorderRadius = 18;
            this.btnExit_click.BorderThickness = 1;
            this.btnExit_click.DisabledState.BorderColor = System.Drawing.Color.DarkGray;
            this.btnExit_click.DisabledState.CustomBorderColor = System.Drawing.Color.DarkGray;
            this.btnExit_click.DisabledState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(169)))), ((int)(((byte)(169)))), ((int)(((byte)(169)))));
            this.btnExit_click.DisabledState.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(141)))), ((int)(((byte)(141)))), ((int)(((byte)(141)))));
            this.btnExit_click.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(255)))));
            this.btnExit_click.Font = new System.Drawing.Font("Segoe UI", 9F);
            this.btnExit_click.ForeColor = System.Drawing.Color.Black;
            this.btnExit_click.Location = new System.Drawing.Point(339, 135);
            this.btnExit_click.Name = "btnExit_click";
            this.btnExit_click.Size = new System.Drawing.Size(180, 45);
            this.btnExit_click.TabIndex = 2;
            this.btnExit_click.Text = "Exit";
            this.btnExit_click.Click += new System.EventHandler(this.btnExit_click_Click);
            // 
            // btnSave_click
            // 
            this.btnSave_click.BorderRadius = 18;
            this.btnSave_click.BorderThickness = 1;
            this.btnSave_click.DisabledState.BorderColor = System.Drawing.Color.DarkGray;
            this.btnSave_click.DisabledState.CustomBorderColor = System.Drawing.Color.DarkGray;
            this.btnSave_click.DisabledState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(169)))), ((int)(((byte)(169)))), ((int)(((byte)(169)))));
            this.btnSave_click.DisabledState.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(141)))), ((int)(((byte)(141)))), ((int)(((byte)(141)))));
            this.btnSave_click.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(255)))));
            this.btnSave_click.Font = new System.Drawing.Font("Segoe UI", 9F);
            this.btnSave_click.ForeColor = System.Drawing.Color.Black;
            this.btnSave_click.Location = new System.Drawing.Point(339, 76);
            this.btnSave_click.Name = "btnSave_click";
            this.btnSave_click.Size = new System.Drawing.Size(180, 45);
            this.btnSave_click.TabIndex = 1;
            this.btnSave_click.Text = "Save";
            this.btnSave_click.Click += new System.EventHandler(this.btnSave_click_Click);
            // 
            // btnOpen_click
            // 
            this.btnOpen_click.BorderRadius = 18;
            this.btnOpen_click.BorderThickness = 1;
            this.btnOpen_click.DisabledState.BorderColor = System.Drawing.Color.DarkGray;
            this.btnOpen_click.DisabledState.CustomBorderColor = System.Drawing.Color.DarkGray;
            this.btnOpen_click.DisabledState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(169)))), ((int)(((byte)(169)))), ((int)(((byte)(169)))));
            this.btnOpen_click.DisabledState.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(141)))), ((int)(((byte)(141)))), ((int)(((byte)(141)))));
            this.btnOpen_click.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(255)))));
            this.btnOpen_click.Font = new System.Drawing.Font("Segoe UI", 9F);
            this.btnOpen_click.ForeColor = System.Drawing.Color.Black;
            this.btnOpen_click.Location = new System.Drawing.Point(339, 11);
            this.btnOpen_click.Name = "btnOpen_click";
            this.btnOpen_click.Size = new System.Drawing.Size(180, 45);
            this.btnOpen_click.TabIndex = 0;
            this.btnOpen_click.Text = "Open File";
            this.btnOpen_click.Click += new System.EventHandler(this.guna2Button1_Click);
            // 
            // groupBox3
            // 
            this.groupBox3.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(192)))));
            this.groupBox3.Controls.Add(this.pictureBox1);
            this.groupBox3.Location = new System.Drawing.Point(566, 36);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Size = new System.Drawing.Size(696, 601);
            this.groupBox3.TabIndex = 3;
            this.groupBox3.TabStop = false;
            this.groupBox3.Text = "Graph";
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackColor = System.Drawing.Color.White;
            this.pictureBox1.Location = new System.Drawing.Point(18, 44);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(656, 539);
            this.pictureBox1.TabIndex = 0;
            this.pictureBox1.TabStop = false;
            // 
            // lvMatrix
            // 
            this.lvMatrix.GridLines = true;
            this.lvMatrix.HideSelection = false;
            this.lvMatrix.Location = new System.Drawing.Point(84, 25);
            this.lvMatrix.Name = "lvMatrix";
            this.lvMatrix.Size = new System.Drawing.Size(392, 243);
            this.lvMatrix.TabIndex = 0;
            this.lvMatrix.UseCompatibleStateImageBehavior = false;
            this.lvMatrix.View = System.Windows.Forms.View.Details;
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1378, 744);
            this.Controls.Add(this.groupBox3);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Name = "Main";
            this.Text = "Nhóm 7_BFS DFS & Tìm liên thông";
            this.Load += new System.EventHandler(this.Main_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.groupBox3.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.TextBox txtResult;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.ComboBox cboFrom;
        private System.Windows.Forms.ComboBox cboTo;
        private Guna.UI2.WinForms.Guna2Button btnFindPath_click;
        private Guna.UI2.WinForms.Guna2Button btnExit_click;
        private Guna.UI2.WinForms.Guna2Button btnSave_click;
        private Guna.UI2.WinForms.Guna2Button btnOpen_click;
        private System.Windows.Forms.GroupBox groupBox3;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.ListView lvMatrix;
    }
}
